import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle2, ThumbsUp, Send, X } from 'lucide-react';
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
    }, 2000);
  };

  return (
    <section id="reviews" className="py-20 md:py-28 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Client Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Customer Review
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Real feedback from customers who have experienced our computer repair and technology services.
          </p>
        </div>

        {/* Featured Review Card (John Chibueze Nwosu) */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0e172a] to-[#0a1120] border border-cyan-500/20 p-8 sm:p-12 shadow-2xl overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative space-y-6 text-center">
              
              {/* Star Rating display */}
              <div className="flex items-center justify-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Exact user review text */}
              <blockquote className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                “Good”
              </blockquote>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-600/40 flex items-center justify-center font-bold text-cyan-300 text-lg shadow-inner">
                  JN
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-bold text-white text-lg font-display">
                    John Chibueze Nwosu
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-cyan-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Customer</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Any newly added customer reviews */}
          {reviews.length > 1 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {reviews.slice(1).map((rev) => (
                <div key={rev.id} className="glass-card rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">{rev.date}</span>
                  </div>
                  <p className="text-slate-200 text-sm font-medium">“{rev.comment}”</p>
                  <div className="text-xs text-cyan-400 font-semibold">{rev.author}</div>
                </div>
              ))}
            </div>
          )}

          {/* Encourage customer to leave a review section */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-cyan-400 text-sm font-semibold">
              <ThumbsUp className="w-4 h-4" />
              <span>Have you serviced your computer with Picant?</span>
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              We Value Your Feedback
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
              Your feedback helps us continuously improve our computer repair standards and helps other customers in Yaba find reliable tech solutions.
            </p>
            <div>
              <button
                id="leave-review-btn"
                onClick={() => setShowReviewModal(true)}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <MessageSquarePlus className="w-4 h-4 text-cyan-400" />
                <span>Leave a Review</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Leave Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-2xl bg-[#0b1322] border border-slate-700 p-6 shadow-2xl space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white font-display">Rate Your Experience</h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-1 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">Thank You!</h4>
                <p className="text-xs text-slate-300">Your review has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Samuel Adebayo"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 text-slate-500 hover:text-amber-400 transition-colors"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-cyan-400 ml-2">{rating} / 5 Stars</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Review / Comments</label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us about the service you received..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl cyan-gradient-btn text-white text-xs font-bold shadow-md flex items-center gap-1.5"
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
