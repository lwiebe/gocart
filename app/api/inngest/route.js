import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/inngest/functions";

// Create an API thats servers zero functions
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        syncUserCreation,
        syncUserUpdation,
        syncUserDeletion
    ],
});