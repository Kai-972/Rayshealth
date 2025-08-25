import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

export default function CommentSection() {
  return (
    <section id="comments" className="mt-12 w-full max-w-3xl mx-auto">
      <Card className="shadow-md border border-gray-200">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Leave a Comment</h2>
          <p className="text-sm text-gray-500 mb-6">
            Your email address will not be published. Required fields are marked{" "}
            <span className="text-red-500">*</span>
          </p>

          {/* Comment Textarea */}
          <div className="mb-4">
            <Textarea
              placeholder="Type your comment here..."
              className="w-full min-h-[140px] resize-none"
            />
          </div>

          {/* Name, Email, Website */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Input placeholder="Name *" required />
            <Input placeholder="Email *" type="email" required />
            <Input placeholder="Website" />
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2 mb-6">
            <Checkbox id="save-info" />
            <label
              htmlFor="save-info"
              className="text-sm text-gray-600 cursor-pointer"
            >
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>

          {/* Submit Button */}
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg">
            Post Comment
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
