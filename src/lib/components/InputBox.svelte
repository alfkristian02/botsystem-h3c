<script lang="ts">
  import { addDoc, collection } from "firebase/firestore/lite";

  let { database } = $props();

  let value: string = $state("");

  // TODO: okey, this should be a util function or something, same goes for the reads in other components.
  async function handleWriteFine() {
    await addDoc(collection(database, "prikk_melding"), {
      forklaring: value,
    });

    value = "";
  }
</script>

<div class="container">
  <textarea name="textarea" id="textarea" bind:value></textarea>
  <br />
  <button onclick={handleWriteFine}>meld</button>
</div>

<style>
  .container {
    display: block;
    text-align: center;
  }

  textarea {
    resize: none;
    width: 15rem;
    height: 5rem;
  }

  button {
    margin-top: 1rem;
  }
</style>
