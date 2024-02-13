namespace Entities
{
    public class Foodkart : DishCategory
    {
        
        public int Id { get; set; }
        public int DishId { get; set; }
        public string? DishType { get; set; }
        public string? DishName { get; set; }
        public string? DishImage { get; set; }
        public decimal DishPrize { get; set; }
        public string? DishDescription { get; set; }
        public DateTime DishAddDate { get; set; }
        public int DishStatus { get; set; }
        public int Quantity { get; set; }
        public string? DishQuantity { get; set; }
        public decimal MRP { get; set; }
        public decimal SellingCost { get; set; }
    }
    public class DishCategory
    {
        public int DishCategoryId { get; set; }
        public string? DishCategoryName { get; set; }
        public string? Icon { get; set; }
        public int Status { get; set; }
    }
    
    public class RecentView : Foodkart
    {
        public int RecentViewId { get; set; }
        public string? UserID { get; set; }
        public int DishId { get; set; }
        public DateTime CreatedDate { get; set; }
    }
        public class TeaKart
    {
        public int TeaId { get; set; }
        public int TeaCategoryId { get; set; }
        public int TeaType { get; set; }
        public string? TeaName { get; set; }
        public string? TeaImage { get; set; }
        public string? TeaDescription { get; set; }
        public decimal TeaPrize { get; set; }
        public int Quantity { get; set; }
        public DateTime CreateDate { get; set; }
        public int Status { get; set; }
    }
}
