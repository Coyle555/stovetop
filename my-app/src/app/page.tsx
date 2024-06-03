

export default function Home() {
  return (
   
<main className="bg-black-100 flex items-center justify-center min-h-screen">
    <div className="container mx-auto p-4">
        <div className="flex items-center justify-center space-x-4">
            <button className="bg-red-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl">-</button>
            <div className="text-4xl font-bold">0</div>
            <button  className="bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl">+</button>
        </div>
    </div>
</main>
    
  );
}
