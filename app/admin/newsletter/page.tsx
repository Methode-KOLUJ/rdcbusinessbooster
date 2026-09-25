'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Mail, Send, Loader2, AlertCircle, CheckCircle, BarChart3, Users } from 'lucide-react';
import TiptapEditor from '@/components/admin/TiptapEditor';

export default function NewsletterPage() {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const [stats, setStats] = useState<any>({ logs: [], emails: [], totalEmails: 0 });
    const [isLoadingStats, setIsLoadingStats] = useState(true);
    const [showEmails, setShowEmails] = useState(false);

    const fetchStats = async () => {
        try {
            const res = await axios.get('/api/admin/newsletter/stats');
            if (res.data.success) {
                setStats(res.data);
            }
        } catch (error) {
            console.error('Erreur stats', error);
        } finally {
            setIsLoadingStats(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    const handleSend = async () => {
        if (!subject.trim() || !content.trim()) {
            setStatus({ type: 'error', message: 'Veuillez remplir le sujet et le contenu du mail.' });
            return;
        }

        if (!confirm('Êtes-vous sûr de vouloir envoyer cet email à TOUS les inscrits ?')) {
            return;
        }

        setIsSending(true);
        setStatus({ type: null, message: '' });

        try {
            const res = await axios.post('/api/admin/newsletter/send', {
                subject,
                content
            });

            if (res.data.success) {
                setStatus({ type: 'success', message: 'La newsletter a été envoyée avec succès.' });
                setSubject('');
                setContent('');
                fetchStats(); // Refresh logs after sending
            } else {
                setStatus({ type: 'error', message: res.data.error || 'Erreur lors de l\'envoi.' });
            }
        } catch (error: any) {
            setStatus({ type: 'error', message: error.response?.data?.error || 'Erreur réseau.' });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Newsletter</h1>
                    <p className="text-gray-500">Envoyez des mises à jour aux candidats inscrits.</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                        <Mail size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Audience</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.totalEmails} inscrits</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Section Éditeur */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Send size={20} className="text-blue-600"/> Nouvelle campagne</h2>
                    
                    {status.type && (
                        <div className={`p-4 mb-6 rounded-xl flex items-start gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                            {status.type === 'success' ? <CheckCircle className="mt-0.5 shrink-0" size={20} /> : <AlertCircle className="mt-0.5 shrink-0" size={20} />}
                            <p>{status.message}</p>
                        </div>
                    )}

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Sujet de l'email</label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Contenu</label>
                            <TiptapEditor value={content} onChange={setContent} />
                            <p className="text-xs text-gray-500 mt-2">
                                Le contenu sera enveloppé dans un modèle d'email professionnel standard.
                            </p>
                        </div>

                        <div className="flex justify-end pt-4 border-t border-gray-100">
                            <button
                                onClick={handleSend}
                                disabled={isSending || !subject.trim() || !content.trim()}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSending ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        <span>Envoi en cours...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Envoyer ({stats.totalEmails} mails)</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section Statistiques & Liste */}
                <div className="space-y-6">
                    
                    {/* Historique */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><BarChart3 size={20} className="text-gray-500"/> Historique d'envoi</h3>
                        {isLoadingStats ? (
                            <div className="flex justify-center p-4"><Loader2 className="animate-spin text-gray-400" /></div>
                        ) : stats.logs.length === 0 ? (
                            <p className="text-sm text-gray-500 text-center py-4">Aucune newsletter envoyée.</p>
                        ) : (
                            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                                {stats.logs.map((log: any) => (
                                    <div key={log._id} className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-sm">
                                        <p className="font-semibold text-gray-900 line-clamp-1">{log.subject}</p>
                                        <div className="flex justify-between items-center mt-2 text-gray-500">
                                            <span className="flex items-center gap-1"><Users size={14}/> {log.recipientCount}</span>
                                            <span>{format(new Date(log.sentAt), 'dd MMM yyyy HH:mm', { locale: fr })}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Liste des abonnés */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold flex items-center gap-2"><Users size={20} className="text-gray-500"/> Liste d'emails</h3>
                            <button onClick={() => setShowEmails(!showEmails)} className="text-blue-600 text-sm font-medium hover:underline">
                                {showEmails ? 'Masquer' : 'Afficher'}
                            </button>
                        </div>
                        
                        {showEmails && (
                            <div className="max-h-60 overflow-y-auto space-y-1 bg-gray-50 p-3 rounded-xl border border-gray-200">
                                {stats.emails.map((email: string, idx: number) => (
                                    <div key={idx} className="text-sm text-gray-700 py-1 border-b border-gray-200 last:border-0 truncate">
                                        {email}
                                    </div>
                                ))}
                                {stats.emails.length === 0 && <p className="text-sm text-gray-500">Aucun email trouvé.</p>}
                            </div>
                        )}
                        {!showEmails && (
                            <p className="text-sm text-gray-500">Vous avez {stats.totalEmails} emails inscrits dans la base de données.</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
