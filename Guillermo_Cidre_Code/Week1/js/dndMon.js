window.onload = function(){
    //getPokemon();
    $("#getMonster").on('click', getMonster);
}

function getMonster() {

    /* HOW TO SEND AN AJAX REQUEST AND PROCESS THE RESPONSE */

    //get id from input
    var id = $('#monId').val();
    //STEP 1 - create xhr
    var xhr = new XMLHttpRequest();

    //STEP 2 - Callback function
    xhr.onreadystatechange = function (){
        console.log(Date() + " " + xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200) {
            //Code to process response
            let resp = xhr.responseText;
            monster = JSON.parse(resp);
            //set name
            $('#monName').text(monster.name);
            $('#monData').empty();

            let liTop
            var data = [ ["Size", monster.size], ["Type", monster.type], ["Subtype", monster.subtype], ["Alignment", monster.alignment],
            ["Armor Class", monster.armor_class], ["Hit Points", monster.hit_points], ["Hit Dice", monster.hit_dice],
            ["Strength", monster.strength], ["Dexterity", monster.dexterity], ["Constitution", monster.constitution],
            ["Intelligence", monster.intelligence], ["Wisdom", monster.wisdom], ["Charisma", monster.charisma],
            ["Dexterity Save", monster.dexterity_save], ["Constitution Save", monster.constitution_save],
            ["Wisdom Save", monster.wisdom_save], ["Charisma Save", monster.charisma_save], ["Perception", monster.perception],
            ["Stealth", monster.stealth], ["Damage Vulnerabilities", monster.damage_vulnerabilites],
            ["Damage Resistance", monster.damage_resistance], ["Damage Immunities", monster.damage_immunities],
            ["Condition Immunities", monster.condition_immunities], ["Senses", monster.senses], ["Languages", monster.languages],
            ["Challenge Rating", monster.challenge_ratings]];
        
            //display each element in data
            data.forEach(function (dat){
                //dat[0] is string name and dat[1] is value
                if(dat[1] != null && dat[1] != ""){
                    liTop = document.createElement('li');
                    liTop.innerHTML = dat[0] + ": " + dat[1];
                    $('#monData').append(liTop);    
                }
            });

            //action/special abilities
            liTop = document.createElement('li');
            liTop.innerHTML = "Special Abilities:";

            let liul = document.createElement('ul');
            let liabi;
            let liabiTop;

            monster.special_abilities.forEach(function (abi, ind) {
                liabi = document.createElement('li');
                liabi.innerHTML = "Ability " + (ind+1);

                liabiTop = document.createElement('ul');
                //show attack_bonus desc and name
                liAttr = document.createElement('li');
                liAttr.innerHTML = "Name: " + abi.name;
                liabiTop.appendChild(liAttr); 

                liAttr = document.createElement('li');
                liAttr.innerHTML = "Description: " + abi.desc;
                liabiTop.appendChild(liAttr);

                liAttr = document.createElement('li');
                liAttr.innerHTML = "Attack Bonus: " + abi.attack_bonus;
                liabiTop.appendChild(liAttr); 

                if(abi.damage_bonus != null){
                    liAttr = document.createElement('li');
                    liAttr.innerHTML = "Damage Bonus: " + abi.damage_bonus;
                    liabiTop.appendChild(liAttr);
                }

                if(abi.damage_dice != null){
                    liAttr = document.createElement('li');
                    liAttr.innerHTML = "Damage Dice: " + abi.damage_dice;
                    liabiTop.appendChild(liAttr);
                }

                liabi.appendChild(liabiTop);
                liul.appendChild(liabi);
            });
            liTop.appendChild(liul);
            $('#monData').append(liTop);

            liTop = document.createElement('li');
            liTop.innerHTML = "Actions:";

            liul = document.createElement('ul');

            monster.actions.forEach(function (act, ind) {
                liabi = document.createElement('li');
                liabi.innerHTML = "Action " + (ind+1);

                liabiTop = document.createElement('ul');
                //show attack_bonus desc and name
                liAttr = document.createElement('li');
                liAttr.innerHTML = "Name: " + act.name;
                liabiTop.appendChild(liAttr); 

                liAttr = document.createElement('li');
                liAttr.innerHTML = "Description: " + act.desc;
                liabiTop.appendChild(liAttr);

                liAttr = document.createElement('li');
                liAttr.innerHTML = "Attack Bonus: " + act.attack_bonus;
                liabiTop.appendChild(liAttr); 

                if(act.damage_bonus != null){
                    liAttr = document.createElement('li');
                    liAttr.innerHTML = "Damage Bonus: " + act.damage_bonus;
                    liabiTop.appendChild(liAttr);
                }

                if(act.damage_dice != null){
                    liAttr = document.createElement('li');
                    liAttr.innerHTML = "Damage Dice: " + act.damage_dice;
                    liabiTop.appendChild(liAttr);
                }

                liabi.appendChild(liabiTop);
                liul.appendChild(liabi);
            });
            liTop.appendChild(liul);
            $('#monData').append(liTop);
        }
    }

    //STEP 3 - open request
    var url = `http://www.dnd5eapi.co/api/monsters/${id}/`;//`http://dnd5eapi.co/api/monsters/${id}/`;
    xhr.open("GET", url, true);

    //STEP 4 - send() <-- takes param of request body
    xhr.send();

    //Anything following this will execute as if request never happened
    //Does not wait for response before continuing

}