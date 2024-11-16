import React from "react";
export function MyButton({ title }: { title: string }) {
    return (
      <button  className='btn btn-primary mr-2'>{title}</button>
    );
}