<script lang="ts">
  import DialogBox from "$lib/components/DialogBox.svelte";
  import FineHistory from "$lib/components/FineHistory.svelte";
  import InputBox from "$lib/components/InputBox.svelte";
  import { database } from "$lib/utils/firestore";
  import { onMount } from "svelte";
  import { type Firestore, collection, getDocs } from "firebase/firestore/lite";

  type Rule = {
    description: string;
    fine: number;
  };

  let showDialog: boolean = $state(false);
  let regler: Array<Rule> = $state([]);

  const toggleShowDialog = function toggleShowDialog() {
    showDialog = !showDialog;
  };

  async function getRules(db: Firestore) {
    const reglerCol = collection(db, "prikk_regler");
    const reglerSnapshot = await getDocs(reglerCol);
    const reglerList: Array<Rule> = reglerSnapshot.docs.map((doc) => {
      let data = doc.data();
      return {
        description: data.regel,
        fine: data.bot,
      };
    });
    return reglerList;
  }

  onMount(async () => {
    regler = await getRules(database);
  });
</script>

<h1>H3C - Bøter</h1>

<img src="img/cover.png" alt="cool stuff" />

<button onclick={toggleShowDialog} class="open-rules">?</button>

{#if showDialog}
  <DialogBox {toggleShowDialog} {regler} />
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
