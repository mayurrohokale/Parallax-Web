export default function Home(){

    return(
        <div className="relative h-screen overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
          style={{ backgroundImage: 'url(https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630)' }}
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-opacity-50 bg-gray-800">
          <h1 className="text-4xl font-bold text-white">Beautiful Landscape</h1>
        </div>
      </div>
    )
}