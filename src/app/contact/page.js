import { Suspense } from 'react';
import ContactPage from '../compnents/ContactPage';

export default function Contact() {
    return (
        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
            <ContactPage />
        </Suspense>
    );
}
