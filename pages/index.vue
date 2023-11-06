<script setup>

  useHead({
    title: "Dir.ectory | Handshake Resources, Guides, and More",
    meta: [
      { 
        name: 'description', 
        content: `Find out what others have built in the Handshake ecosystem by searching through our directory of websites.` 
      },      
    ],
  })

</script>

<template>
  <div class="index">

    <div class="hero">
      <NuxtLink to="/" class="logo" >
        <span class="icon-directory directory" ></span>
        <span class="hns">Handshake</span>
        <span class="dir">Dir.ectory.</span>
      </NuxtLink>
      <p>Thank you for visiting the <NuxtLink to="https://handshake.org" target="_BLANK">Handshake</NuxtLink> Dir.ectory.</p>
      <p>Search through our directory to find valuable resources and see what others have built in the Handshake ecosystem.</p>
      <p>Once you are equipped with a Handshake resolver, visit our website at <NuxtLink to="https://dir.ectory" target="_BLANK">https://dir.ectory/</NuxtLink></p>
    </div>
    
    <div class="resolvers">
      <h2>Handshake Resolvers</h2>
      <NuxtLink to="https://impervious.com/fingertip" target="_BLANK"><h3>Fingertip</h3></NuxtLink>
      <p>Menubar app, by Impervious</p>
      
      <NuxtLink to="https://www.hdns.io/" target="_BLANK"><h3>HDNS</h3></NuxtLink>
      <p>DNS resolver, by Namebase </p>
      
      <NuxtLink to="https://apps.apple.com/us/app/hnsns-handshake-resolver/id1660666457" target="_BLANK"><h3>HNSNS</h3></NuxtLink>
      <p>iOS app, by Eskimo Software</p>

      <NuxtLink to="" target="_BLANK"><h3></h3></NuxtLink>
      <p></p>
    </div>

    <div class="links">
      <p>Source Code: <NuxtLink to="https://github.com/ryanmmoon/dir.ectory" target="_BLANK">Github</NuxtLink></p>
      <p>Supported by: <NuxtLink to="https://github.com/opensystm/handshake-micro-grants" target="_BLANK">Open Systems</NuxtLink></p>
    </div>

  </div>
</template>
