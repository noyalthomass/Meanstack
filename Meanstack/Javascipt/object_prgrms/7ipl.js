var point_table=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:11,won:5,loss:6,pts:10},
    {t_name:"pkb",pld:11,won:4,loss:7,pts:8},
    {t_name:"rr",pld:11,won:4,loss:7,pts:8},
    {t_name:"srh",pld:10,won:2,loss:8,pts:4}
]

//print number of team playing ipl_2k21
console.log(point_table.length);


//print names only
point_table.map(team=>team.t_name).forEach(name=>console.log(name))


//print team details whose poin greater than 10
point_table.filter(team=>team.pts>10).forEach(points=>console.log(points))

//is kkr playing ipl?
var is_playing=point_table.some(team=>team.t_name=="kkr")
console.log(is_playing);

//sort team wrt loss descending
point_table.sort((team1,team2)=>team2.loss-team1.loss)
console.log(point_table);

//print team deytails who have max point
var max_point_team=point_table.reduce((team1,team2)=>
(team1.pts>team2.pts)?team1:team2)
console.log(max_point_team);

//print team wrt won 
var w_count={}
for(let team of point_table){
    if(team.won in w_count){
        w_count[team.won].push(team.t_name)
    }
    else{
        w_count[team.won]=[team.t_name]
    }
}
console.log(w_count);

//print team wrt pts