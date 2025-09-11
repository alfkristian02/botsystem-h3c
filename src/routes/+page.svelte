<script lang="ts">
  import DialogBox from "$lib/components/DialogBox.svelte";
  import FineHistory from "$lib/components/FineHistory.svelte";
  import { database } from "$lib/utils/firestore";

  let showDialog: boolean = $state(false);

  const toggleShowDialog = function toggleShowDialog() {
    showDialog = !showDialog;
  };
</script>

<button onclick={toggleShowDialog} class="open-rules">?</button>

{#if showDialog}
  <DialogBox {toggleShowDialog} {database}/>
{/if}

<FineHistory {database}/>

<style>
  .open-rules {
    border-radius: 100%;
    padding: 10px;
    text-align: center;
    position: absolute;
    right: 2rem;
    top: 2rem;
    height: 3rem;
    width: 3rem;
    background-color: white;
  }

  .open-rules:hover {
    background-color: rgb(241, 241, 241);
  }
</style>
