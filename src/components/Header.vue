<template>
    <header class="header">
        <p class="logo">Календарь</p>
        <div class="btn-wrapper">
            <button class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="12px"
                    width="12px" version="1.1" viewBox="0 0 128 128">
                    <g>
                        <line style="fill:none;stroke:#5f6368;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;"
                            x1="87.5" x2="40.5" y1="111" y2="64" />
                        <line style="fill:none;stroke:#5f6368;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;"
                            x1="40.5" x2="87.5" y1="64" y2="17" />
                    </g>
                </svg>
            </button>
            <button class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="12px"
                    width="12px" version="1.1" viewBox="0 0 128 128">
                    <g>
                        <line style="fill:none;stroke:#5f6368;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;"
                            x1="40.5" x2="87.5" y1="17" y2="64" />
                        <line style="fill:none;stroke:#5f6368;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;"
                            x1="87.5" x2="40.5" y1="64" y2="111" />
                    </g>
                </svg>
            </button>
        </div>
        <div class="date">Март 2023</div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    gap: 30px;
    height: 48px;
    width: 100%;
    padding: 8px;
    background-color: #fff;
    border-bottom: 1px solid #c5c6c7;
}

.logo {
    font-size: 24px;
    text-align: center;
    color: #3c4043;
}

.btn-wrapper {
    display: flex;
    align-items: center;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 5px;
    border: none;
    background-color: #fff;
    border-radius: 50%;
}

.btn:hover {
    background-color: #efeff0;
}

.date {
    font-size: 24px;
    color: #3c4043;
}
</style>