<script lang="ts">
  import DialogBox from "$lib/components/DialogBox.svelte";
  import FineHistory from "$lib/components/FineHistory.svelte";
  import InputBox from "$lib/components/InputBox.svelte";
  import { database } from "$lib/utils/firestore";

  let showDialog: boolean = $state(false);

  const toggleShowDialog = function toggleShowDialog() {
    showDialog = !showDialog;
  };
</script>

<h1>H3C - Botsystem</h1>

<button onclick={toggleShowDialog} class="open-rules">?</button>

{#if showDialog}
  <DialogBox {toggleShowDialog} {database} />
{/if}

<div class="input-box">
  <InputBox {database} />
</div>

<FineHistory {database} />

<style>
  h1 {
    text-align: center;
    margin-top: 4rem;
  }
  
  .open-rules {
    position: absolute;
    border-radius: 100%;
    right: 1rem;
    top: 1rem;
    height: 2rem;
    width: 2rem;

    background-color: white;
  }

  .open-rules:hover {
    background-color: rgb(241, 241, 241);
  }
</style>
