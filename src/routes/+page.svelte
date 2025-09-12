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

<h1>H3C - Bøter</h1>

<img src="img/cover.png" alt="cool stuff">

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

  img {
    width: 70vw;
    border-radius: 5px;
    display: block;
    margin: auto;
  }
  
  .open-rules {
    position: absolute;
    border-radius: 50%;
    right: 1rem;
    top: 1rem;
    height: 3rem;
    width: 3rem;

    background-color: white;

    font-size: 20px;
    color: black;
    border-style: solid;
    border-color: black;
  }

  .open-rules:hover {
    background-color: rgb(241, 241, 241);
  }
</style>
