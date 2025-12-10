# `dataDatabricksWorkspaceEntityTagAssignment` Submodule <a name="`dataDatabricksWorkspaceEntityTagAssignment` Submodule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceEntityTagAssignment <a name="DataDatabricksWorkspaceEntityTagAssignment" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignment databricks_workspace_entity_tag_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignment"

datadatabricksworkspaceentitytagassignment.NewDataDatabricksWorkspaceEntityTagAssignment(scope Construct, id *string, config DataDatabricksWorkspaceEntityTagAssignmentConfig) DataDatabricksWorkspaceEntityTagAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig">DataDatabricksWorkspaceEntityTagAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig">DataDatabricksWorkspaceEntityTagAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksWorkspaceEntityTagAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignment"

datadatabricksworkspaceentitytagassignment.DataDatabricksWorkspaceEntityTagAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignment"

datadatabricksworkspaceentitytagassignment.DataDatabricksWorkspaceEntityTagAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignment"

datadatabricksworkspaceentitytagassignment.DataDatabricksWorkspaceEntityTagAssignment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignment"

datadatabricksworkspaceentitytagassignment.DataDatabricksWorkspaceEntityTagAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksWorkspaceEntityTagAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksWorkspaceEntityTagAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksWorkspaceEntityTagAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceEntityTagAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceEntityTagAssignmentConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentConfig" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignment"

&datadatabricksworkspaceentitytagassignment.DataDatabricksWorkspaceEntityTagAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EntityId: *string,
	EntityType: *string,
	TagKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityId">EntityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignment#entity_id DataDatabricksWorkspaceEntityTagAssignment#entity_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityType">EntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignment#entity_type DataDatabricksWorkspaceEntityTagAssignment#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignment#tag_key DataDatabricksWorkspaceEntityTagAssignment#tag_key}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignment#entity_id DataDatabricksWorkspaceEntityTagAssignment#entity_id}.

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignment#entity_type DataDatabricksWorkspaceEntityTagAssignment#entity_type}.

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignment#tag_key DataDatabricksWorkspaceEntityTagAssignment#tag_key}.

---



