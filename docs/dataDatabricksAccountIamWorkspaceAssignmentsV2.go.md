# `dataDatabricksAccountIamWorkspaceAssignmentsV2` Submodule <a name="`dataDatabricksAccountIamWorkspaceAssignmentsV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamWorkspaceAssignmentsV2 <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_workspace_assignments_v2 databricks_account_iam_workspace_assignments_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountiamworkspaceassignmentsv2"

datadatabricksaccountiamworkspaceassignmentsv2.NewDataDatabricksAccountIamWorkspaceAssignmentsV2(scope Construct, id *string, config DataDatabricksAccountIamWorkspaceAssignmentsV2Config) DataDatabricksAccountIamWorkspaceAssignmentsV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config">DataDatabricksAccountIamWorkspaceAssignmentsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config">DataDatabricksAccountIamWorkspaceAssignmentsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.resetPageSize"></a>

```go
func ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAccountIamWorkspaceAssignmentsV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountiamworkspaceassignmentsv2"

datadatabricksaccountiamworkspaceassignmentsv2.DataDatabricksAccountIamWorkspaceAssignmentsV2_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountiamworkspaceassignmentsv2"

datadatabricksaccountiamworkspaceassignmentsv2.DataDatabricksAccountIamWorkspaceAssignmentsV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountiamworkspaceassignmentsv2"

datadatabricksaccountiamworkspaceassignmentsv2.DataDatabricksAccountIamWorkspaceAssignmentsV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountiamworkspaceassignmentsv2"

datadatabricksaccountiamworkspaceassignmentsv2.DataDatabricksAccountIamWorkspaceAssignmentsV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksAccountIamWorkspaceAssignmentsV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAccountIamWorkspaceAssignmentsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAccountIamWorkspaceAssignmentsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_workspace_assignments_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamWorkspaceAssignmentsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceAssignments">WorkspaceAssignments</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `WorkspaceAssignments`<sup>Required</sup> <a name="WorkspaceAssignments" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceAssignments"></a>

```go
func WorkspaceAssignments() DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *f64
```

- *Type:* *f64

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceId"></a>

```go
func WorkspaceId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamWorkspaceAssignmentsV2Config <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountiamworkspaceassignmentsv2"

&datadatabricksaccountiamworkspaceassignmentsv2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	WorkspaceId: *f64,
	PageSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_workspace_assignments_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentsV2#workspace_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_workspace_assignments_v2#page_size DataDatabricksAccountIamWorkspaceAssignmentsV2#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.workspaceId"></a>

```go
WorkspaceId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_workspace_assignments_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentsV2#workspace_id}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_workspace_assignments_v2#page_size DataDatabricksAccountIamWorkspaceAssignmentsV2#page_size}.

---

### DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountiamworkspaceassignmentsv2"

&datadatabricksaccountiamworkspaceassignmentsv2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments {
	PrincipalId: *f64,
	WorkspaceId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.property.principalId">PrincipalId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_workspace_assignments_v2#principal_id DataDatabricksAccountIamWorkspaceAssignmentsV2#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_workspace_assignments_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentsV2#workspace_id}. |

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.property.principalId"></a>

```go
PrincipalId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_workspace_assignments_v2#principal_id DataDatabricksAccountIamWorkspaceAssignmentsV2#principal_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.property.workspaceId"></a>

```go
WorkspaceId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/account_iam_workspace_assignments_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentsV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountiamworkspaceassignmentsv2"

datadatabricksaccountiamworkspaceassignmentsv2.NewDataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.get"></a>

```go
func Get(index *f64) DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksaccountiamworkspaceassignmentsv2"

datadatabricksaccountiamworkspaceassignmentsv2.NewDataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.effectiveEntitlements">EffectiveEntitlements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.entitlements">Entitlements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalId">PrincipalId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `EffectiveEntitlements`<sup>Required</sup> <a name="EffectiveEntitlements" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.effectiveEntitlements"></a>

```go
func EffectiveEntitlements() *[]*string
```

- *Type:* *[]*string

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.entitlements"></a>

```go
func Entitlements() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalIdInput"></a>

```go
func PrincipalIdInput() *f64
```

- *Type:* *f64

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *f64
```

- *Type:* *f64

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalId"></a>

```go
func PrincipalId() *f64
```

- *Type:* *f64

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments</a>

---



