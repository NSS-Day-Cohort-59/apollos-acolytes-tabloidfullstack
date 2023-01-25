﻿using System.Collections.Generic;

using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository
    {
        AllCategoriesDTO GetAll(bool usePagination, int? increment, int? offset);
        public void Add(Category category);
    }
}