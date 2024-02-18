<template>
  <div class="mx-auto flex bg-red">
    <div class="w-2/3 font-dm-sans my-48">
      <h1 class="mt-20 mb-5 font-semibold text-5xl">
        Create Your Free QR Codes
      </h1>
      <h2 class="text-xl font-dm-sans font-thin">
        Create your own custom, high-quality QR codes with my QR Code Generator.
        Use QR codes to drive traffic and increase sales when customers scan
        your printed or digital code.
      </h2>
    </div>
    <div class="image-holder flex items-center justify-center w-2/3">
      <!-- Add flex, items-center, and justify-center -->
      <img
        src="../assets/image.svg"
        alt="Artist"
        class="object-center w-auto h-3/4"
      />
    </div>
  </div>

  <div class="mx-auto flex pb-7">
    <div class="w-2/3 font-dm-sans">
      <h1 class="mt-20 mb-5 font-semibold text-5xl">The magic starts here</h1>
      <h2 class="text-xl font-dm-sans font-thin">
        Paste a url to create a QR code
      </h2>
      <div class="mt-5 pb-5">
        <label
          for="qrContent"
          class="block text-gray-700 text-sm font-bold mb-2"
          >Enter QR Code Content:</label
        >
        <input
        placeholder="URL here"
          type="text"
          id="qrContent"
          name="qrContent"
          class="w-full bg-white border border-gray-700 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="button-group block">
        <button
          class="font-dm-sans rounded-full px-5 py-3 bg-black text-white mr-10"
        >
          Generate
        </button>
        <button class="font-dm-sans rounded-full px-8 py-3 bg-black text-white">
          Save
        </button>
      </div>
    </div>
    <div class="qr-holder flex items-center justify-center w-2/3">
      <div class="w-96 h-full border-2 border-black rounded-xl bg-gray-300">
        <!-- Your square content goes here -->
      </div>
    </div>
  </div>
</template>
