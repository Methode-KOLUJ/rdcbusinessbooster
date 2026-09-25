'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Users, Search, Loader2, Trash2 } from 'lucide-react';
import { IInscription } from '@/models/Inscription';

export default function AdminDashboard() {
    const [inscriptions, setInscriptions] = useState<IInscription[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchInscriptions = async () => {
            try {
                const res = await axios.get('/api/admin/inscriptions');
                if (res.data.success) {
                    setInscriptions(res.data.data);
                }
            } catch (error) {
                console.error('Erreur lors du chargement des inscrits', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInscriptions();
    }, []);

    const toggleTraitee = async (id: string, currentStatus: boolean) => {
        // Optimistic update
        setInscriptions(prev => prev.map(inc => String(inc._id) === id ? { ...inc, traitee: !currentStatus } as IInscription : inc));
        try {
            await axios.patch('/api/admin/inscriptions', { id, traitee: !currentStatus });
        } catch (error) {
            console.error('Erreur de mise à jour:', error);
            // Revert on error
            setInscriptions(prev => prev.map(inc => String(inc._id) === id ? { ...inc, traitee: currentStatus } as IInscription : inc));
        }
    };

    const getWhatsAppLink = (phone: string) => {
        const cleanPhone = phone.replace(/[^\d+]/g, '');
        // If it starts with 0 (e.g. 081...), assume it's DRC (+243)
        const waPhone = cleanPhone.startsWith('0') ? `+243${cleanPhone.substring(1)}` : cleanPhone;
        return `https://wa.me/${waPhone.replace('+', '')}`;
    };

    const deleteInscription = async (id: string) => {
        if (!confirm('Supprimer cette candidature définitivement ?')) return;
        setInscriptions(prev => prev.filter(inc => String(inc._id) !== id));
        try {
            await axios.delete('/api/admin/inscriptions', { data: { id } });
        } catch (error) {
            console.error('Erreur de suppression:', error);
            // Refetch on error
            const res = await axios.get('/api/admin/inscriptions');
            if (res.data.success) setInscriptions(res.data.data);
        }
    };

    const filteredInscriptions = inscriptions.filter((inc) => 
        inc.nom.toLowerCase().includes(search.toLowerCase()) || 
        inc.email.toLowerCase().includes(search.toLowerCase()) ||
        inc.telephone.includes(search)
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Candidatures</h1>
                    <p className="text-gray-500">Gérez les inscriptions au programme.</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        <Users size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Inscrits</p>
                        <p className="text-2xl font-bold text-gray-900">{inscriptions.length}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50/50">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Rechercher par nom, email..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-gray-700 font-medium border-b border-gray-100">
                            <tr>
                                <th className="px-4 py-4">Traité</th>
                                <th className="px-4 py-4">Nom complet</th>
                                <th className="px-4 py-4">Email</th>
                                <th className="px-4 py-4">Téléphone</th>
                                <th className="px-4 py-4">Province</th>
                                <th className="px-4 py-4">Date</th>
                                <th className="px-4 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={7} className="px-6 py-12 text-center">
                                        <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600 mb-4" />
                                        <p className="text-gray-500">Chargement des candidatures...</p>
                                    </td>
                                </tr>
                            ) : filteredInscriptions.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                                        Aucune inscription trouvée.
                                    </td>
                                </tr>
                            ) : (
                                filteredInscriptions.map((inc) => (
                                    <tr key={String(inc._id)} className={`transition-colors ${inc.traitee ? 'bg-green-50/30' : 'hover:bg-gray-50/50'}`}>
                                        <td className="px-4 py-4">
                                            <button
                                                onClick={() => toggleTraitee(String(inc._id), !!inc.traitee)}
                                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                                    inc.traitee 
                                                    ? 'bg-green-500 border-green-500' 
                                                    : 'border-gray-300 hover:border-green-400'
                                                }`}
                                            >
                                                {inc.traitee && (
                                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </button>
                                        </td>
                                        <td className="px-4 py-4 font-medium text-gray-900">{inc.nom}</td>
                                        <td className="px-4 py-4">{inc.email}</td>
                                        <td className="px-4 py-4">
                                            <a 
                                                href={getWhatsAppLink(inc.telephone)} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-green-600 hover:text-green-700 font-medium hover:underline flex items-center gap-1"
                                                title="Contacter sur WhatsApp"
                                            >
                                                {inc.telephone}
                                            </a>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                                {inc.province}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-xs text-gray-500 whitespace-nowrap">
                                            {inc.createdAt ? format(new Date(inc.createdAt), 'dd/MM/yy', { locale: fr }) : '-'}
                                        </td>
                                        <td className="px-4 py-4">
                                            <button
                                                onClick={() => deleteInscription(String(inc._id))}
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Supprimer"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
