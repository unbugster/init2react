import React from "react";
import { MySelect } from './UI/select/MySelect';
import { MyInput } from './UI/input/MyInput';
const PostFilter = ({ filter, setFilter }) => {


    return (
        <div>
            <MyInput
                placeholder="Search..."
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })} />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Sort"
                options={[
                    { value: 'title', name: 'by Name' },
                    { value: 'body', name: 'by Description' }
                ]}
            />
        </div>
    )
};

export { PostFilter }




