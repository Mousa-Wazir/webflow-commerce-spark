
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Review = {
  id: number;
  user: string;
  rating: number;
  comment: string;
};

const initialReviews: Review[] = [
  {
    id: 1,
    user: "Ayesha",
    rating: 5,
    comment: "Great quality and service! Will rent again.",
  },
  {
    id: 2,
    user: "Ali",
    rating: 4,
    comment: "Fast delivery, good product but box was slightly damaged.",
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !rating || !comment) return;

    setSubmitting(true);
    setTimeout(() => {
      setReviews([
        {
          id: Date.now(),
          user: name,
          rating,
          comment,
        },
        ...reviews,
      ]);
      setName("");
      setRating(0);
      setComment("");
      setSubmitting(false);
    }, 650);
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-6 px-2 sm:px-6 bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-2xl">
        <Button variant="outline" size="sm" className="mb-4" onClick={() => navigate(-1)}>
          ← Back
        </Button>
        <Card className="mb-6 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Product Reviews</CardTitle>
            <div className="text-sm text-muted-foreground mt-2">
              Read what people are saying or add your own review below.
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  className="flex-1"
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  maxLength={25}
                  disabled={submitting}
                  required
                />
                <div className="flex gap-1 items-center ml-0 sm:ml-3">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      disabled={submitting}
                      aria-label={`Rate ${star} stars`}
                      className={`transition-all rounded-full border-none p-1 ${
                        rating >= star ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      <Star filled={rating >= star} className="w-6 h-6" fill={rating >= star ? "#facc15" : "none"} />
                    </button>
                  ))}
                  <span className="text-sm ml-2 text-gray-500">{rating > 0 ? `${rating}/5` : ""}</span>
                </div>
              </div>
              <Textarea
                placeholder="Write your review here (max 500 chars)..."
                value={comment}
                onChange={e => setComment(e.target.value)}
                maxLength={500}
                disabled={submitting}
                required
                className="resize-none"
              />
              <div className="flex justify-end">
                <Button type="submit" disabled={submitting || !name || !rating || !comment}>
                  {submitting ? "Submitting..." : "Submit Review"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="mb-2">
          <span className="font-semibold text-lg">Recent Reviews</span>
        </div>
        <div className="flex flex-col gap-5">
          {reviews.length === 0 && (
            <div className="text-gray-400 text-center p-8">No reviews yet. Be the first to review!</div>
          )}
          {reviews.map(r => (
            <Card key={r.id} className="shadow-sm">
              <CardHeader className="flex flex-row items-center gap-2 p-4 pb-2">
                <span className="font-medium">{r.user}</span>
                <div className="flex gap-0.5 ml-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4"
                      fill={idx < r.rating ? "#facc15" : "none"}
                      color={idx < r.rating ? "#facc15" : "#d1d5db"}
                      strokeWidth={idx < r.rating ? 0 : 2}
                    />
                  ))}
                </div>
                <span className="ml-2 text-xs text-gray-400">{r.rating}/5</span>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-1">
                <span className="text-gray-700">{r.comment}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
