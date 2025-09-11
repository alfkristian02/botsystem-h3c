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

{#each history as entry}
    <p>{entry}</p>
{/each}

<!-- TODO: make pagination for this -->
