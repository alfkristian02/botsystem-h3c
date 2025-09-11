<script lang="ts">
  import { onMount } from "svelte";
  import { collection, getDocs } from "firebase/firestore/lite";

  let { database } = $props();

  let history: Array<string> = $state([]);

  async function getFines() {
    const reglerCol = collection(database, "prikk_melding");
    const reglerSnapshot = await getDocs(reglerCol);
    const reglerList: Array<string> = reglerSnapshot.docs.map(
      (doc) => doc.data().forklaring
    );
    return reglerList;
  }

  onMount(async () => {
    history = await getFines();
  });
</script>

<h2>Meldte bøter</h2>

{#each history as entry}
    <li>{entry}</li>
{/each}

<!-- TODO: make pagination for this -->
<style>
  h2 {
    text-align: center;
    margin-top: 4rem;
  }

  li {
    text-align: center;
    margin-top: 2rem;
  }
</style>