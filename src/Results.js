import Pet from "./Pet";

const Results = ({ pets }) => {
    return (
        <div>
            {!onselectstart.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.map((pet) => (
                    <pet
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                        key={pet.id}
                        images={pet.images}
                        location={'${pet.city}, ${pet.state}'}
                        id={pet.it}
                    />
                ))
            )}
        </div>
    );
};

export default Results;