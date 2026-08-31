import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Package, 
  Check, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  UploadCloud,
  FileCheck
} from 'lucide-react';
import { YanglaLogo, YanglaEmblem } from './YanglaLogo';

interface PrintRunModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const PrintRunModal: React.FC<PrintRunModalProps> = ({
  isOpen,
  onClose,
  initialProduct
}) => {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || 'Executive Business Cards');
  const [quantity, setQuantity] = useState(500);
  const [selectedPaper, setSelectedPaper] = useState('350 GSM Velvet Art Card');
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>(['Matte Lamination', 'Raised Spot UV']);
  const [velocity, setVelocity] = useState<'standard' | 'express' | 'sameday'>('standard');
  const [step, setStep] = useState<'configure' | 'contact' | 'confirmed'>('configure');

  // Contact fields
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [uploadedFile, setUploadedFile] = useState<string>('');
  const [confirmedOrderId, setConfirmedOrderId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const productList = [
    { name: 'Executive Business Cards', basePrice: 20, unitPrice: 0.05, min: 100 },
    { name: 'Rigid & Folding Packaging Boxes', basePrice: 150, unitPrice: 0.85, min: 250 },
    { name: 'Corporate Brochures & Flyers', basePrice: 40, unitPrice: 0.12, min: 250 },
    { name: 'Books, Catalogs & Annual Reports', basePrice: 120, unitPrice: 1.40, min: 50 },
    { name: 'Roll-Up Standees & Flex Banners', basePrice: 25, unitPrice: 18.0, min: 1 },
    { name: 'Die-Cut Stickers & Product Labels', basePrice: 25, unitPrice: 0.04, min: 250 },
    { name: 'Corporate Merchandise & Apparel', basePrice: 80, unitPrice: 4.50, min: 20 },
    { name: 'Custom Offset Commercial Run', basePrice: 200, unitPrice: 0.10, min: 1000 }
  ];

  const paperOptions = [
    '350 GSM Velvet Art Card',
    '300 GSM Textured Cotton / Ivory',
    '170 GSM Silk Matte Art Paper',
    '130 GSM High-Gloss Flyers Paper',
    '1200 GSM Heavy Rigid Greyboard',
    'Waterproof Tearproof Synthetic Vinyl',
    'Unbleached Eco Kraft 300 GSM'
  ];

  const finishOptions = [
    { name: 'Matte Lamination', add: 15 },
    { name: 'Gloss Lamination', add: 15 },
    { name: 'Raised Spot UV (Tactile)', add: 35 },
    { name: 'Metallic Hot Foil (Gold / Copper)', add: 45 },
    { name: 'Deep Blind Embossing', add: 40 },
    { name: 'Die-Cut Custom Shape', add: 30 }
  ];

  // Calculate live estimate
  const currentProdObj = productList.find((p) => p.name === selectedProduct) || productList[0];
  const finishesCost = selectedFinishes.reduce((acc, fName) => {
    const f = finishOptions.find((opt) => opt.name === fName);
    return acc + (f ? f.add : 0);
  }, 0);

  const speedMultiplier = velocity === 'sameday' ? 1.5 : velocity === 'express' ? 1.25 : 1.0;
  const rawCost = (currentProdObj.basePrice + (quantity * currentProdObj.unitPrice) + finishesCost) * speedMultiplier;
  const estimatedNPR = Math.round(rawCost * 135); // Approx NPR conversion
  const estimatedUSD = Math.round(rawCost);

  const toggleFinish = (fName: string) => {
    if (selectedFinishes.includes(fName)) {
      setSelectedFinishes(selectedFinishes.filter((f) => f !== fName));
    } else {
      setSelectedFinishes([...selectedFinishes, fName]);
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = `RUN-${Math.floor(10000 + Math.random() * 90000)}`;

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: clientName,
          email: clientEmail,
          phone: clientPhone,
          company: clientCompany || 'Direct Client',
          serviceTypes: [selectedProduct],
          budgetRange: `NPR ~${estimatedNPR.toLocaleString()} ($${estimatedUSD})`,
          timeline: velocity === 'sameday' ? 'Urgent Same-Day' : velocity === 'express' ? '24-48 Hours' : 'Standard 3-5 Days',
          projectDescription: `Print Run Request [${generatedId}]\nProduct: ${selectedProduct}\nQuantity: ${quantity}\nPaper: ${selectedPaper}\nFinishes: ${selectedFinishes.join(', ')}\nArtwork Attached: ${uploadedFile || 'Will email PDF later'}`,
          hearAboutUs: 'Print Run Wizard'
        })
      });
      setConfirmedOrderId(generatedId);
      setStep('confirmed');
    } catch (err) {
      setConfirmedOrderId(generatedId);
      setStep('confirmed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white text-neutral-900 rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-neutral-200 relative animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-[#1e1435] text-white px-6 py-4 flex items-center justify-between z-20 border-b border-purple-900">
          <div className="flex items-center gap-3">
            <div className="p-0.5 rounded bg-white flex items-center justify-center shadow-sm">
              <YanglaEmblem size={30} />
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-bold">
                YANGLA PRINT RUN ESTIMATOR
              </div>
              <h3 className="text-base font-black leading-tight">Commercial Machine Time & Quote Request</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {step === 'configure' && (
            <div className="space-y-6">
              
              {/* 1. Select Product */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-[#7e22ce]" />
                  <span>1. Select Print Item / Product</span>
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full text-xs font-semibold bg-neutral-50 border border-neutral-300 rounded-lg p-3 text-neutral-900 focus:outline-none focus:border-[#7e22ce] focus:ring-1 focus:ring-[#7e22ce]"
                >
                  {productList.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name} (Min {p.min} pcs)
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Quantity Slider / Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    2. Production Run Quantity
                  </label>
                  <span className="font-mono text-sm font-black text-purple-900 bg-purple-100 px-3 py-1 rounded">
                    {quantity.toLocaleString()} pcs
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[100, 250, 500, 1000, 2500, 5000, 10000].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setQuantity(qty)}
                      className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                        quantity === qty
                          ? 'bg-[#7e22ce] text-white shadow-xs'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      {qty.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Paper Substrate */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  3. Paper Stock & Substrate
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {paperOptions.map((paper) => (
                    <button
                      key={paper}
                      type="button"
                      onClick={() => setSelectedPaper(paper)}
                      className={`p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${
                        selectedPaper === paper
                          ? 'border-[#7e22ce] bg-purple-50 text-purple-900 font-bold'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                      }`}
                    >
                      <span>{paper}</span>
                      {selectedPaper === paper && <Check className="w-3.5 h-3.5 text-[#7e22ce]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Finishes Checklist */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  4. Post-Press Premium Finishes
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {finishOptions.map((f) => {
                    const isSelected = selectedFinishes.includes(f.name);
                    return (
                      <button
                        key={f.name}
                        type="button"
                        onClick={() => toggleFinish(f.name)}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-[#7e22ce] bg-purple-50 text-purple-900 font-bold'
                            : 'border-neutral-200 hover:border-neutral-300 text-neutral-600'
                        }`}
                      >
                        <span className="truncate">{f.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#7e22ce] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. Production Velocity */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  5. Delivery Velocity
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'standard', label: 'Standard', time: '3 – 5 Days', badge: 'Normal' },
                    { id: 'express', label: 'Express', time: '24 – 48 Hrs', badge: '+25%' },
                    { id: 'sameday', label: 'Same-Day Rush', time: 'Urgent Dispatch', badge: '+50%' }
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVelocity(v.id as any)}
                      className={`p-3 rounded-lg border text-left text-xs transition-all ${
                        velocity === v.id
                          ? 'border-[#7e22ce] bg-purple-50 text-purple-900 font-bold'
                          : 'border-neutral-200 text-neutral-700'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span>{v.label}</span>
                        <span className="text-[10px] font-mono text-purple-700">{v.badge}</span>
                      </div>
                      <div className="text-[11px] text-neutral-500 font-normal">{v.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Real-time Calculation Summary Bar */}
              <div className="bg-neutral-900 text-white p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                    Calculated Press Estimate
                  </span>
                  <div className="text-2xl font-black">
                    NPR ~{estimatedNPR.toLocaleString()}{' '}
                    <span className="text-sm font-normal text-neutral-400">
                      (~${estimatedUSD} USD)
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Includes paper stock, CMYK printing, chosen finishes & pre-press proofing.
                  </div>
                </div>

                <button
                  onClick={() => setStep('contact')}
                  className="w-full sm:w-auto px-6 py-3 bg-[#7e22ce] hover:bg-[#6b21a8] text-white font-bold text-xs uppercase tracking-wider rounded-none flex items-center justify-center gap-2 shadow"
                >
                  <span>Proceed to Dispatch Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {step === 'contact' && (
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg flex items-center justify-between text-xs text-purple-900">
                <div>
                  <span className="font-bold">Job Summary:</span> {quantity}x {selectedProduct} on {selectedPaper} ({velocity})
                </div>
                <button
                  type="button"
                  onClick={() => setStep('configure')}
                  className="text-purple-700 underline font-bold"
                >
                  Edit Spec
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-900 focus:outline-none focus:border-[#7e22ce]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+977 98XXXXXXXX"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-900 focus:outline-none focus:border-[#7e22ce]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@business.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-900 focus:outline-none focus:border-[#7e22ce]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-900 focus:outline-none focus:border-[#7e22ce]"
                  />
                </div>
              </div>

              {/* Artwork file attachment trigger */}
              <div className="border border-dashed border-neutral-300 rounded-lg p-3 bg-neutral-50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-neutral-600">
                  <UploadCloud className="w-4 h-4 text-[#7e22ce]" />
                  <span>{uploadedFile || 'Upload PDF/AI Artwork File (Optional)'}</span>
                </div>
                <label className="cursor-pointer px-3 py-1 bg-white border border-neutral-300 text-neutral-800 text-[11px] font-bold rounded">
                  Choose File
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setUploadedFile(e.target.files[0].name);
                      }
                    }}
                  />
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep('configure')}
                  className="px-5 py-3 border border-neutral-300 text-neutral-700 font-bold text-xs uppercase tracking-wider"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-grow py-3.5 bg-[#7e22ce] hover:bg-[#6b21a8] text-white font-bold text-xs uppercase tracking-wider rounded-none shadow transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Allocating Machine Queue...</span>
                  ) : (
                    <>
                      <span>Transmit Official Print Run Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900">Print Run Queued Successfully!</h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto">
                Your print job has been assigned order ticket{' '}
                <span className="font-mono font-bold text-purple-900 bg-purple-100 px-2 py-0.5 rounded">
                  {confirmedOrderId}
                </span>
                . Our pre-press team will review your specifications and contact you via phone/WhatsApp within 2 hours.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setStep('configure');
                    onClose();
                  }}
                  className="px-8 py-3 bg-[#7e22ce] text-white font-bold text-xs uppercase tracking-wider rounded-none shadow"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
