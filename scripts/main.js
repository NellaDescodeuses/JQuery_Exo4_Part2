// $(document).ready(function() {
//     //Au clic sur la div,
//     $('#green').click(function () { 
//         $('#text').css({'color' : 'green'});
//     })
//     $('#red').click(function () { 
//         $('#text').css({'color' : 'red'});
//     })
//     $('#blue').click(function () { 
//         $('#text').css({'color' : 'blue'});
//     })
// })

//ou

// $(document).ready(function () {
//     // function changeTextColor(){
//         //au clic je sélection tout ce qui concerne la classe color
//         $('.color').click(function(){
//             //je crée une variable et on ajoute un attribut #id à notre objet '.color' (celui que l'on clique). Les id correspondent aux id dans l'html ('green', 'red', 'blue') 3 class color
//             var addAttribut = $(this).attr('id');
//             //on sélectionne notre text et lui applique la couleur correspondant a l'id de l'objet cliqué.
//             $('#text').css('color',addAttribut);
//         });
//     // }
// });

//ou 

$(document).ready(function () {
    //on crée la fonction qui change la couleur du texte sur clixk des divs colorées
    function changeTextColor(){
        //on cible toutes les dibx colorée déja crées ou qui seront crées plus tard
        $('.color').click(function(){
            // la boucle "for" permet de manipuler les divs qui ne sont pas encore créées
            //$('.color').length = le nombre de toutes les divs avec la class="color" qui existe dans le HTML
            //et celles qui seront crées avec js.
            for(var i = 0; i < $('.color').length; i++){
                // avec .attr('id') on récupère la valeur de id de toutes les divs qui ont la class="color"
                var idOfColor = $(this).attr('id');
                $('#text').css('color', idOfColor);
            }
        })
    
    }
    //la méthode mousedown() c'est au click
    $('#text').mousedown(function(){
        //au click su le texte, je fais apparaitre un input et un bouton
        $('body').append('<input type="text">', '<button type="button">Click</button>');
        
        //au clic sur le nouveau bouton, 
        $('button').click(function () { 
            //on récupère la valeur de l'input
            var newColor = $('input').val();
            //newDiv = une variable qui garde la div nouvellement crée
            //newDiv a la class="color" par défaut. Cette class lui donne des dimension mais pas de couleur
            var newDiv = $('<div class="color"></div>') 
            //avec la méthode append() = on ajoute cette nouvelle div à la fin les divs qui se trouvent dans la div #parentColor (la div parent)
            // avec la méthode prepend() = on ajoute au
            var parent = $('#parentColor').append(newDiv);
            // var newDiv = $('#parentColor:last-child');
            //ici on donne la couleur du fond aux divs nouvellement crées
            newDiv.css('background-color', newColor);
            //On donne l'attribut id="la valeur de l'input". C'est l'id qui permet de colorer le text. Voir la 
            newDiv.attr('id',newColor);
            //On appelle la fontion pour changer la couleur du texte
            changeTextColor();
         });
    });
    //on appelle au début pour que les divs déjà existante puissent changer de couleur
    //changeTextColor(); on peut l'appeler au début ou a la fin.
});
