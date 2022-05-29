
<script setup lang="ts">
    import SkillGroup from "../components/skills/SkillGroup.vue";
    import SkillGroupItem from "../components/skills/SkillGroupItem.vue";


</script>

<template>
    <div id="skills-page">
        <p id="skills-label">My Skills Level in Languages and Frameworks</p>

        <skill-group :label="'Languages'">
            <skill-group-item 
                :label="'Dart'"
                :percentage="75"
                :item-style="{width: '119.8px'}"
                :image-src="'dart-programming-language.png'" />
            <skill-group-item 
                :label="'Typescript'"
                :percentage="85"
                :item-style="{width: '119.8px'}"
                :image-src="'typescript-programming-language.png'" />
            <skill-group-item 
                :label="'SQL'"
                :percentage="70"
                :item-style="{width: '119.8px'}"
                :image-src="'database-icon.png'" />
            <skill-group-item 
                :label="'Golang'"
                :percentage="50"
                :item-style="{width: '119.8px'}"
                :image-src="'go-programming-language.png'" />
        </skill-group>
        <skill-group :label="'Platforms'">
            <skill-group-item 
                :label="'NodeJs'"
                :percentage="66"
                :item-style="{width: '119.8px'}"
                :image-src="'node-js.png'" />
            <skill-group-item 
                :label="'Flutter'"
                :percentage="80"
                :item-style="{width: '119.8px'}"
                :image-src="'flutter.png'" />
        </skill-group>
        <skill-group :label="'Frontend Frameworks'">
            <skill-group-item 
                :label="'VueJs'"
                :percentage="66"
                :item-style="{width: '119.8px'}"
                :image-src="'vuejs.png'" />
        </skill-group>
    </div>
</template>

<style lang="scss" scoped>
    #skills-page {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 80%;
        margin: 50px 30px 0 30px;
        
        #skills-label {
            margin: 20px 0;
            text-align: left;
            font-size: 2.2em;
            font-weight: bold;
            color: var(--primary-color);
        }


    }
</style>