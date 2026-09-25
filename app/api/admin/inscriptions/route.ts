import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Inscription from '@/models/Inscription';

export async function GET(req: NextRequest) {
    try {
        // Optionnel : vérifier le cookie 'admin_auth'
        const authCookie = req.cookies.get('admin_auth');
        if (!authCookie || authCookie.value !== 'true') {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        
        // Fetch all inscriptions sorted by newest
        const inscriptions = await Inscription.find().sort({ createdAt: -1 });
        
        return NextResponse.json({ success: true, data: inscriptions });
    } catch (error: unknown) {
        console.error('Error fetching inscriptions:', error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const authCookie = req.cookies.get('admin_auth');
        if (!authCookie || authCookie.value !== 'true') {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        const { id, traitee } = await req.json();

        if (!id) {
            return NextResponse.json({ success: false, error: 'ID required' }, { status: 400 });
        }

        await dbConnect();
        
        const updated = await Inscription.findByIdAndUpdate(
            id,
            { traitee },
            { new: true }
        );

        if (!updated) {
            return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
        }
        
        return NextResponse.json({ success: true, data: updated });
    } catch (error: unknown) {
        console.error('Error updating inscription:', error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const authCookie = req.cookies.get('admin_auth');
        if (!authCookie || authCookie.value !== 'true') {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ success: false, error: 'ID required' }, { status: 400 });
        }

        await dbConnect();
        
        const deleted = await Inscription.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
        }

        if (deleted.email) {
            const RetainedEmail = (await import('@/models/RetainedEmail')).default;
            await RetainedEmail.updateOne(
                { email: deleted.email },
                { $set: { email: deleted.email } },
                { upsert: true }
            );
        }
        
        return NextResponse.json({ success: true, message: 'Inscription supprimée' });
    } catch (error: unknown) {
        console.error('Error deleting inscription:', error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}
