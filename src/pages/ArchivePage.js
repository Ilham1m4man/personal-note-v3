import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

function ArchivePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [archivedNotes, setArchivedNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });
    const { locale } = React.useContext(LocaleContext);

    React.useEffect(() => {
        getArchivedNotes().then(({ data }) => {
            setArchivedNotes(data);
        });
    }, []);

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = archivedNotes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLowerCase()
        );
    });

    return (
        <section>
            <h2>{locale === 'id' ? 'Catatan Kamu' : 'Your Notes'}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <NoteList notes={filteredNotes} />
        </section>
    )
}

ArchivePage.propTypes = {
    archivedNotes: PropTypes.arrayOf(PropTypes.object),
    keyword: PropTypes.string,
}

export default ArchivePage;