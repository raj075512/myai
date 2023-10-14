

import React from 'react'
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { clerk } from "@/lib/clerk-server";
import { $notes } from '@/lib/db/schema';

 import { db } from '@/lib/db';
import { and ,eq } from 'drizzle-orm';

type Props = {
    params: {
      noteId: string;
    };
  };
  
  const NotebookPage = async ({ params: { noteId } }: Props) => {
    const { userId } = await auth();
    if (!userId) {
      return redirect("/dashboard");
    }
    // const user = await clerk.users.getUser(userId);
   
    const user = await clerk.users.getUser(userId);

    const notes = await db
      .select()
      .from($notes)
      .where(and(eq($notes.id, parseInt(noteId)), eq($notes.userId, userId)));
  
    if (notes.length != 1) {
      return redirect("/dashboard");
    }
    const note = notes[0];
  
    return (
        <div>
             {noteId}
        </div>
    )
}

export default NotebookPage;
