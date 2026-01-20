import React from 'react';
import GenericPage from '../components/GenericPage';
import { Users, FileText, CheckCircle } from 'lucide-react';

const Administration = () => {
    return (
        <GenericPage title="Administration" subtitle="Leadership & Governance">
            <div className="max-w-4xl mx-auto space-y-16 py-8">

                {/* Governing Body Section */}
                <div id="governing-body" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-6 border-b-2 border-blue-600 pb-2 inline-block">
                        <Users className="text-blue-600" size={32} />
                        <h2 className="text-3xl font-bold text-blue-900 uppercase tracking-wide">
                            Governing Body
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                        The Governing Body of KSK College of Engineering and Technology is the supreme administrative body responsible for the management and governance of the institution. It ensures that the college adheres to its vision and mission while maintaining high academic standards.
                    </p>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
                        <ul className="space-y-3">
                            {[
                                "Formulating statutory policies and strategies.",
                                "Overseeing academic and administrative activities.",
                                "Ensuring financial stability and resource allocation.",
                                "Promoting research, innovation, and faculty development.",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* IQAC Section */}
                <div id="iqac" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-6 border-b-2 border-blue-600 pb-2 inline-block">
                        <FileText className="text-blue-600" size={32} />
                        <h2 className="text-3xl font-bold text-blue-900 uppercase tracking-wide">
                            Internal Quality Assurance Cell (IQAC)
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                        The Internal Quality Assurance Cell (IQAC) acts as a catalyst for continuous improvement in our institution. It focuses on the realization of the goals of quality enhancement and sustenance.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="text-lg font-bold text-blue-900 mb-3">Objectives</h3>
                            <p className="text-gray-700">
                                To develop a system for conscious, consistent, and catalytic action to improve the academic and administrative performance of the institution.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="text-lg font-bold text-blue-900 mb-3">Functions</h3>
                            <p className="text-gray-700">
                                Development of quality benchmarks, dissemination of information on quality parameters, and organization of workshops on quality-related themes.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </GenericPage>
    );
};

export default Administration;
