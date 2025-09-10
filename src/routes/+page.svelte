<script>
  import { initializeApp } from "firebase/app";
  import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
  import { onMount } from "svelte";

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  let regler = [];

  async function getRules(db) {
    const reglerCol = collection(db, "prikk_regler");
    const reglerSnapshot = await getDocs(reglerCol);
    const reglerList = reglerSnapshot.docs.map((doc) => doc.data());
    return reglerList;
  }

  onMount(async () => { 
    regler = await getRules(db);
  });
</script>

{#each regler as item}
  <li>{JSON.stringify(item)}</li>
{/each}
