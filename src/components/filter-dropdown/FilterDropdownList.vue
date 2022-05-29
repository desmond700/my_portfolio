<script setup lang="ts">
    import { ref } from "vue";
    import { MenuDown } from "mdue";

    const toggleDropdown = ref(false)
</script>

<template>
    <div id="filter-container">
        <p id="label">Filter</p>
        <div id="filter-dropdown">
            <div 
                id="dropdown-toggle" 
                @click="toggleDropdown = !toggleDropdown">
                <p id="label">
                    No filter
                </p>
                <MenuDown id="arrow-icon" />
            </div>
            <div 
                v-if="toggleDropdown"
                id="dropdown-content">
                <button class="filter-item" @click="">
                    <span id="label">Sort by Date</span>
                </button>
                <button class="filter-item" @click="">
                    <span id="label">Sort by A-Z</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #filter-container {
        position: relative;
        display: flex;
        align-items: center;
        height: 28px;
        
        #label {
            margin: 0 10px;
            font-size: 0.9em;
            color: var(--primary-color);
        }

        #filter-dropdown {
            position: relative;
            flex-grow: 1;
            height: 100%;
            width: 150px;

            #dropdown-toggle {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 100%;
                flex-grow: 1;
                border: 2px solid var(--primary-color);
                cursor: pointer;

                #label {
                    font-size: 0.8em;
                    font-weight: 700;
                    color: var(--primary-color);
                }

                #arrow-icon {
                    margin-left: 5px;
                    font-size: 1.1em;
                    color: var(--primary-color);
                }
            }

            #dropdown-content {
                position: absolute;
                top: 30px;
                left: 0;
                right: 0;
                border: 2px solid var(--primary-color);

                .filter-item {
                    display: flex;
                    width: 100%;
                    padding: 5px 0;
                    border: none;
                    background-color: #fff;
                    cursor: pointer;

                    &:not(:first-child) {
                        border-top: 1px solid var(--secondary-color);
                    }

                    &:hover {
                       font-weight: 500;
                    }

                    #label {
                        font-size: 0.9em;
                    }
                }
            }
        }
    }
    
</style>