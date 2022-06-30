import React from "react";
import StoryCard from "./StoryCard";

const stories = [{
        name: "Mark Zuckerberg",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        profile: "https://www.facebook.com/zuck",
        pic: "https://scontent.fvga5-1.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Jmy3g__LJAAAX-SVbHm&_nc_ht=scontent.fvga5-1.fna&oh=00_AT-LirgJXVpub79eUiH7PfurI8V8OnKeJeA5wVNAywQCkA&oe=62CF56D6",
    },
    {
        name: "Bill Gates",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/220px-Bill_Gates_2017_%28cropped%29.jpg",
        profile: "https://www.facebook.com/BillGates",
        pic: "https://storage.googleapis.com/cgiarorg/2021/02/c343f97f-1200x-1-b.jpg",
    },
    {
        name: "Hrithik Roshan",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hrithik_at_Rado_launch.jpg/220px-Hrithik_at_Rado_launch.jpg",
        profile: "https://www.facebook.com/hrithikroshan",
        pic: "https://www.bollywoodhungama.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-22-at-9.12.41-PM.jpeg",
    },
    {
        name: "Virat Kohli",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Virat_Kohli_portrait.jpg/220px-Virat_Kohli_portrait.jpg",
        profile: "https://www.facebook.com/virat.kohli",
        pic: "https://scontent.fvga5-1.fna.fbcdn.net/v/t1.6435-9/198702001_341873793971721_8393918869125689122_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ymEYHkn368MAX-0q3wG&_nc_ht=scontent.fvga5-1.fna&oh=00_AT_mgn_oPVUDxJ58S-3tDPgVJ-ApGd5i72KStRgBlpEQsg&oe=62CEF820",
    },
    {
        name: "Kiara Advani",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Kiara_Advani_walks_for_Shyamal-Bhumika_at_India_Couture_Week_2018_Day_4_%2803%29_%28cropped%29.jpg/220px-Kiara_Advani_walks_for_Shyamal-Bhumika_at_India_Couture_Week_2018_Day_4_%2803%29_%28cropped%29.jpg",
        profile: "https://www.facebook.com/KiaraAdvani",
        pic: "https://scontent.fvga5-1.fna.fbcdn.net/v/t1.6435-9/165144406_296060415207675_1982103051589387061_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yn3VmtxYqUQAX83qE8h&_nc_ht=scontent.fvga5-1.fna&oh=00_AT-XyeRI1um7s2qCRshbByWy6tpwJCmo_F1N8dR5uYSTvQ&oe=62CD696A",
    },
];

function Stories() {
    return ( <
        div className = "flex items-center justify-center space-x-3 pt-0.5 md:pt-1 lg:pt-2 mx-auto" > {
            stories.map((story) => ( <
                StoryCard key = { story.profile }
                name = { story.name }
                img = { story.src }
                profile = { story.profile }
                profilePic = { story.pic }
                />
            ))
        } <
        /div>
    );
}

export default Stories;