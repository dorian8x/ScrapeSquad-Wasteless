import { CookbookOrSearchResults } from '../../components/CookbookOrSearchResults';

export const Cookbook = () => {
  return (
    <div className="cookbook-page">
      {/* <UserProfile /> */}
      <h1>My Cookbook</h1>
      <CookbookOrSearchResults />
    </div>
  );
};
