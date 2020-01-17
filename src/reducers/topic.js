const TOPIC_STATE={
    page:1,
    limit:20,
    list:[],
    topicinfo:{},
    replies:[],
    admireState:false  //点赞状态
}
export default function  topiclist(prestate=TOPIC_STATE,action){
    switch(action.type){
            case 'getTopicList':
        return {...prestate,list:action.list,page:1}
          default:
        return {...prestate}
    }
}