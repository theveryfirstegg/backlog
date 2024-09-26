import Game from "../../lib/Game";
import { NextResponse } from "next/server";


export async function POST(req){
    try{
        const body = await req.json()
        const gameData = body.game

       const existingGame = await Game.findOne({id: gameData.id})

        if(existingGame){
            return NextResponse.json({message: "Game already in list"}, {status: 201})
        }


        await Game.create(gameData)

        return NextResponse.json({message: "Game created"}, {status: 201})

    } catch(error){
        return NextResponse.json({message: "Error"}, {status: 500})

    }
}

export async function GET() {
    try {
        const games = await Game.find();
        return NextResponse.json({ games }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error}, {status: 500})
    }
}

export async function DELETE(req){
    try{

        const {searchParams} = new URL(req.url);
        const gameID = searchParams.get('id')

        const targetGame = await Game.findOneAndDelete({id: gameID})

        if(!targetGame){
            return NextResponse.json({ message: "Game is not in your library" }, { status: 404 });
        }


        return NextResponse.json({message: 'Game was deleted from your list', status: 201})

    } catch(error){
        return NextResponse.json({message: 'Error, game not deleted', status: 500})
    }
}

export async function PUT(req){
    try{
        const {searchParams} = new URL(req.url);
        const gameID = searchParams.get('id');

        const body = await req.json();
        const gameData = body.progress

        const updateGameData = await Game.findOneAndUpdate({id : gameID}, {$set: {"progress": gameData}}) 

        return NextResponse.json({message: 'Game progress was edited', status: 201})


    } catch(error){
        return NextResponse.json({message: 'Error, game was not edited', status: 500})

    }

}



