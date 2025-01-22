async function cacheExample() {
    const cache = await caches.open('my-cache');
    await cache.add('https://developer.mozilla.org/en-US/docs/Web/API');
    const response = await cache.match('/example.html');
    if (response) {
      const text = await response.text();
      console.log(text);
    }
  }
  
  cacheExample();
  