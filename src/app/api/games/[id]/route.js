import Game from '../../../lib/Game';
import { NextResponse } from 'next/server';

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