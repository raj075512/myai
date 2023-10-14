'use client'

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog"
  
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useMutation } from '@tanstack/react-query' ;

import axios from "axios"; 
import { useRouter } from 'next/navigation' ;

type Props ={
};

  

const CreateNoteDialog = (props: Props) => {
 
// store the input //

    const [input, setInput] = React.useState("");
    const router = useRouter();
    // for heading the end point ('/api/createNoteBook')  //

    const createNoteBook=useMutation({
     mutationFn:async ()=>{
      const response =await axios.post("/api/createNotebook",{
         name:input,
      });
      return response.data;
     },
    }) ;




   const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
       
      if(input  === "")
      {
       window.alert('please enter the name of notebook');
       return ;
      }
      createNoteBook.mutate(undefined,{

      onSuccess:({note_id})=>{

         console.log("notebook is created",{note_id});
         router.push(`/notebook/${note_id}`);

      },onError:(error) =>{

         console.error(error);
         window.alert("failed to create the new notebook ");

      }
      });

   }
    return (
      
       <Dialog>
            <DialogTrigger className='mx-2'>
                 <div className='border-2 flex border-green-300 center items-center rounded-md text-center h-full justify-center border-dotted sm:flex-col hover:shadow-xl transition hover:translate-y-1 flex-row p-4 '> 
                 <h2 className="font-semibold text-green-600 sm:mt-2">
               New Note Book
          </h2>
                 </div>
            </DialogTrigger>
            <DialogContent>
                 <DialogHeader>
                    <DialogTitle> Add new Note </DialogTitle>
                    <DialogDescription>
                         Lorem ipsum dolor sit amet consecucimus praesentium!
                    </DialogDescription>
                 </DialogHeader>
                  <form className='p-2 ' onSubmit={handleSubmit} >
                       <div className='flex text-center items-center gap-4 '>
                       <h3 className='font-bold '>Name</h3>
                       <Input placeholder='name...'  value={input} onChange={(e)=>setInput( e.target.value)} />
                       </div>
                       
                       <div className='flex justify-between px-auto   my-3 '>
                          <Button type='submit' variant={"ghost"}  className='bg-red-400 text-white' size="sm"> 
                             delete
                          </Button >
                          <Button type='submit' variant={"ghost"}  className='bg-green-500 text-white' size="sm">
                             create
                          </Button>
                       </div>
                 </form>
            </DialogContent>
       </Dialog>
    
    )
}

export default CreateNoteDialog;
