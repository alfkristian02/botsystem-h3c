<script lang="ts">
  import DialogBox from "$lib/components/DialogBox.svelte";

  let showDialog: boolean = $state(false);

  const noe = function toggleDialogBox() {
    showDialog = !showDialog;
  }

</script>

<button
  onclick={noe}
  class="open-rules">?</button
>

{#if showDialog}
  <DialogBox toggleShowDialog={noe} />
{/if}

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
