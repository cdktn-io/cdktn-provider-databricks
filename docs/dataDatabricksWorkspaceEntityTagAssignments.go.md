# `dataDatabricksWorkspaceEntityTagAssignments` Submodule <a name="`dataDatabricksWorkspaceEntityTagAssignments` Submodule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceEntityTagAssignments <a name="DataDatabricksWorkspaceEntityTagAssignments" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments databricks_workspace_entity_tag_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignments"

datadatabricksworkspaceentitytagassignments.NewDataDatabricksWorkspaceEntityTagAssignments(scope Construct, id *string, config DataDatabricksWorkspaceEntityTagAssignmentsConfig) DataDatabricksWorkspaceEntityTagAssignments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig">DataDatabricksWorkspaceEntityTagAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig">DataDatabricksWorkspaceEntityTagAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetPageSize"></a>

```go
func ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksWorkspaceEntityTagAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignments"

datadatabricksworkspaceentitytagassignments.DataDatabricksWorkspaceEntityTagAssignments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignments"

datadatabricksworkspaceentitytagassignments.DataDatabricksWorkspaceEntityTagAssignments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignments"

datadatabricksworkspaceentitytagassignments.DataDatabricksWorkspaceEntityTagAssignments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignments"

datadatabricksworkspaceentitytagassignments.DataDatabricksWorkspaceEntityTagAssignments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksWorkspaceEntityTagAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksWorkspaceEntityTagAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksWorkspaceEntityTagAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceEntityTagAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tagAssignments">TagAssignments</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `TagAssignments`<sup>Required</sup> <a name="TagAssignments" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tagAssignments"></a>

```go
func TagAssignments() DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList</a>

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceEntityTagAssignmentsConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentsConfig" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignments"

&datadatabricksworkspaceentitytagassignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EntityId: *string,
	EntityType: *string,
	PageSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityId">EntityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityType">EntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#page_size DataDatabricksWorkspaceEntityTagAssignments#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}.

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#page_size DataDatabricksWorkspaceEntityTagAssignments#page_size}.

---

### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignments"

&datadatabricksworkspaceentitytagassignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments {
	EntityId: *string,
	EntityType: *string,
	TagKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityId">EntityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityType">EntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#tag_key DataDatabricksWorkspaceEntityTagAssignments#tag_key}. |

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}.

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}.

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/workspace_entity_tag_assignments#tag_key DataDatabricksWorkspaceEntityTagAssignments#tag_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignments"

datadatabricksworkspaceentitytagassignments.NewDataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.get"></a>

```go
func Get(index *f64) DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksworkspaceentitytagassignments"

datadatabricksworkspaceentitytagassignments.NewDataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a>

---



