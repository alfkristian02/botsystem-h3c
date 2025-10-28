<script lang="ts">
  import { addDoc, collection } from "firebase/firestore/lite";

  let { database } = $props();

  let value: string = $state("");

  // TODO: okey, this should be a util function or something, same goes for the reads in other components.
  async function handleWriteFine() {
    if (value === "") return;

    await addDoc(collection(database, "prikk_melding"), {
      explanation: value,
      date: new Date()
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
    margin-top: 2rem;
  }

  button {
    margin-top: 1rem;
    border-radius: 5px;
    font-size: 20px;
    color: black;
    padding: 8px;
    background-color: white;
    border-style: solid;
    border-color: black;
  }
</style>
