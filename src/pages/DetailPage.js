import React from 'react';
import PropTypes from 'prop-types';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import DetailedNote from '../components/DetailedNote';
import DeleteButton from '../components/buttons/DeleteButton';
import ArchiveButton from '../components/buttons/ArchiveButton';
import UnarchiveButton from '../components/buttons/UnarchiveButton';
import PageNotFound404 from './PageNotFound404';
import { homePath } from '../utils/path-name';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DetailPage() {
    const { id } = useParams();
    const [notes, setNotes] = React.useState({});
    const navigate = useNavigate();

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNotes(data);
        });
    }, [id]);

    async function onDeleteNoteHandler(notes) {
        await deleteNote(notes);
        navigate(homePath);
    }

    async function onArchiveNoteHandler(notes) {
        await archiveNote(notes);
        navigate(homePath);
    }

    async function onUnarchiveNoteHandler(notes) {
        await unarchiveNote(notes);
        navigate(homePath);
    }

    console.log(notes)

    if (notes === null) {
        return <PageNotFound404 />
    }

    let actionArchive;
    if (notes.archived) {
        actionArchive = <UnarchiveButton id={id} onUnarchive={onUnarchiveNoteHandler} />
    } else {
        actionArchive = <ArchiveButton id={id} onArchive={onArchiveNoteHandler} />
    }

    return (
        <section className='detail-page'>
            <DetailedNote note={notes} />
            <div className='detail-page__action'>
                {actionArchive}
                <DeleteButton id={id} onDelete={onDeleteNoteHandler} />
            </div>
        </section>
    )
}

DetailPage.propTypes = {
    note: PropTypes.object,
    id: PropTypes.string,
}

export default DetailPage;