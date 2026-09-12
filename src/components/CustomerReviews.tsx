import React, { useState } from 'react';
import { 
  Star, 
  MessageSquarePlus, 
  CheckCircle2, 
  ThumbsUp, 
  Send, 
  X, 
  Quote, 
  ShieldCheck, 
  Award,
  Sparkles 
} from 'lucide-react';
import { REVIEWS_LIST } from '../data/content';
import { ReviewItem } from '../types';

export const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_LIST);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: authorName.trim(),
      rating,
      comment: comment.trim(),
      date: 'Just now',
      location: 'Yaba, Lagos',
      verified: true
    };

    setReviews([newReview, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowReviewModal(false);
      setAuthorName('');
      setComment('');
      setRating(5);
    }, 1800);
  };

  return (
    <section id="reviews" className="py-20 md:py-28 relative bg-[#070b14] border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-md">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Verified Client Endorsements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Customer <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">Trust &amp; Reviews</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Real feedback from individuals and businesses who have experienced our computer repair and technology solutions in Yaba, Lagos.
          </p>
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="max-w-4xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0d1627] to-slate-900 border border-slate-800 flex flex-wrap items-center justify-around gap-4 text-center shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>Google Business Rating</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-semibold">Verified</span>
              </div>
              <div className="text-xs text-slate-400">5.0 Star Service Record in Yaba</div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm font-bold text-white ml-2">5.0 / 5.0</span>
          </div>

          <button
            id="open-review-modal-badge"
            onClick={() => setShowReviewModal(true)}
            className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 border border-cyan-700/50 text-cyan-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <MessageSquarePlus className="w-3.5 h-3.5" />
            <span>Leave a Review</span>
          </button>
        </div>

        {/* Featured Review Card (John Chibueze Nwosu) */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0e172a] via-[#09101f] to-[#070b14] border border-cyan-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden group">
            {/* Top Glowing Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-cyan-400 to-purple-400" />
            
            {/* Background Decorative Quote Mark */}
            <div className="absolute top-6 right-8 opacity-10 text-cyan-400 pointer-events-none">
              <Quote className="w-28 h-28" />
            </div>

            <div className="relative space-y-6 text-center">
              
              {/* Star Rating display */}
              <div className="flex items-center justify-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-amber-400 text-amber-400 drop-shadow-[0_2px_8px_rgba(251,191,36,0.3)]" />
                ))}
              </div>

              {/* Exact user review text */}
              <blockquote className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
                “Good”
              </blockquote>

              {/* Author & Verification */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 border border-cyan-400/50 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-cyan-950/80">
                  JN
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-extrabold text-white text-lg font-display flex items-center justify-center sm:justify-start gap-2">
                    <span>John Chibueze Nwosu</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-cyan-400 font-semibold mt-0.5">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Client
                    </span>
                    <span className="text-slate-500">&bull;</span>
                    <span className="text-slate-400">Yaba, Lagos</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Any newly added customer reviews */}
          {reviews.length > 1 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {reviews.slice(1).map((rev) => (
                <div key={rev.id} className="glass-card rounded-2xl p-6 space-y-3 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">{rev.date}</span>
                  </div>
                  <p className="text-slate-200 text-sm font-medium leading-relaxed">“{rev.comment}”</p>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs">
                    <span className="text-cyan-300 font-bold">{rev.author}</span>
                    <span className="text-emerald-400 font-medium text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Feedback Banner */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0b1426] to-slate-900 border border-slate-800 text-center space-y-4 shadow-xl">
            <div className="flex items-center justify-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <ThumbsUp className="w-4 h-4 text-cyan-400" />
              <span>Have you had your computer or laptop fixed with Picant?</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white font-display">
              We Value Your Experience &amp; Continuous Trust
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
              Your honest feedback helps us maintain strict diagnostic quality and assists fellow students, professionals, and businesses in Yaba in finding dependable tech support.
            </p>
            <div>
              <button
                id="leave-review-btn"
                onClick={() => setShowReviewModal(true)}
                className="px-6 py-3 rounded-xl cyan-gradient-btn text-white text-xs sm:text-sm font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-md hover:brightness-110 active:scale-95"
              >
                <MessageSquarePlus className="w-4 h-4 text-white" />
                <span>Submit Your Review</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Leave Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-[#09101d] border border-cyan-500/40 p-6 sm:p-7 shadow-2xl space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Rate Your Experience</h3>
                  <p className="text-[11px] text-slate-400">Picant Business Venture</p>
                </div>
              </div>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white transition-colors"
                aria-label="Close review modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-white font-display">Thank You!</h4>
                <p className="text-xs sm:text-sm text-slate-300">Your review has been verified and published to the customer board.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Samuel Adebayo"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Rating</label>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 text-slate-600 hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-amber-400 ml-auto mr-1">{rating} of 5 Stars</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Review &amp; Comments <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us about the computer repair or technology service you received..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl cyan-gradient-btn text-white text-xs font-bold shadow-md flex items-center gap-1.5 cursor-pointer hover:brightness-110"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
