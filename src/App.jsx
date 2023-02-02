import { createPayPalButton } from "./services/createPayPalButton"

export const App = () => {
  return (
    <>
    <div className="min-w-screen w-full min-h-screen h-screen flex flex-col justify-between items-center gap-12 bg-white">
      <div className="flex flex-col items-center p-12 gap-6">
        <div className="flex flex-col items-center gap-4 max-w-[500px]">
          <h1 className="text-black text-5xl xs:text-7xl md:text-8xl text-center font-bold">PayPal Integration</h1>
          <p className="text-black text-lg xs:text-xl md:text-2xl text-center opacity-50">Start making payments around the world in the safest way both you and the company which uses PayPal.</p>
        </div>
        <div className="flex flex-col gap-2 max-w-[350px] w-full">
          <div id="paypal-button-container"></div>
          <button onClick={createPayPalButton} className="py-2 px-4 bg-blue-600 text-sm xs:text-lg text-white font-semibold rounded-full min-w-[200px] w-full hover:bg-blue-500">Checkout with PayPal</button>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[#cfcfcf] text-center font-semibold">Developed by <a href="https://linkedin.com/in/leonelombardo" target="_blank" className="text-[#b1b1b1]">Leonel Lombardo</a></p>
      </div>
    </div>
    </>
  )
}