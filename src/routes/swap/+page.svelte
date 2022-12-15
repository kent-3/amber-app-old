<script lang="ts">
	import { scale } from 'svelte/transition';
    import { scrtBalance, amberBalance } from '../../utils/stores';

    let scrtBalanceValue: string
    let amberBalanceValue: string

	scrtBalance.subscribe(value => {
		scrtBalanceValue = value
	})
    amberBalance.subscribe(value => {
        amberBalanceValue = value
    })

</script>

<div class="container" in:scale>
    <div class="card">
        <img src="/scrt.svg" alt="SCRT"/>
        {scrtBalanceValue} <strong>&emsp;SCRT</strong>
    </div>

    <div class="card" style="color: var(--color-theme-1);">
        <img src="/amber.svg" alt="amber"/>
        {amberBalanceValue} <strong>&emsp;AMBER</strong>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex: 0.6;
        margin: auto auto;
    }
    .card {
        display: flex;
        align-items: center;
        width: 200px;
        height: 30px;
        margin: 25px;
        padding: 5px 20px;
        border: 2px solid var(--color-theme-2);
        border-radius: 10px;
        font-family: var(--font-mono);
        background-color: rgba(0,0,0,0.2);
        box-shadow: inset 0px 0px 3px var(--color-theme-2), 0px 0px 3px var(--color-theme-2);
        color: rgba(254,255,255,0.8)
    }
    .card img {
        height: 25px;
        padding-right: 10px;
    }
</style>