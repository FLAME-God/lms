package dto

type TeacherSignupRequest struct {
	// User fields
	FullName string `form:"fullName" binding:"required"`
	Email    string `form:"email" binding:"required,email"`
	Password string `form:"password" binding:"required,min=6"`
	Phone    int64  `form:"phone" binding:"required"`
	Role     string `form:"role" binding:"required,oneof=TEACHER"`

	// Teacher fields
	Expertise     string `form:"expertise" binding:"required"`
	Experience    int    `form:"experience" binding:"required"`
	Qualification string `form:"qualification" binding:"required"`
	TotalStudent  int    `form:"totalStudent" binding:"required"`
	About         string `form:"about"`
	AccountNumber string `form:"accountNumber" binding:"required"`
	IfscCode      string `form:"ifscCode" binding:"required"`
	BankName      string `form:"bankName" binding:"required"`
	BranchName    string `form:"branchName" binding:"required"`
}
