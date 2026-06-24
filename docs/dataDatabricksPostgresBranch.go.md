# `dataDatabricksPostgresBranch` Submodule <a name="`dataDatabricksPostgresBranch` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresBranch <a name="DataDatabricksPostgresBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch databricks_postgres_branch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresbranch"

datadatabrickspostgresbranch.NewDataDatabricksPostgresBranch(scope Construct, id *string, config DataDatabricksPostgresBranchConfig) DataDatabricksPostgresBranch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig">DataDatabricksPostgresBranchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig">DataDatabricksPostgresBranchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPostgresBranchProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresBranch resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresbranch"

datadatabrickspostgresbranch.DataDatabricksPostgresBranch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresbranch"

datadatabrickspostgresbranch.DataDatabricksPostgresBranch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresbranch"

datadatabrickspostgresbranch.DataDatabricksPostgresBranch_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresbranch"

datadatabrickspostgresbranch.DataDatabricksPostgresBranch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksPostgresBranch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksPostgresBranch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksPostgresBranch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresBranch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.branchId">BranchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference">DataDatabricksPostgresBranchProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference">DataDatabricksPostgresBranchSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference">DataDatabricksPostgresBranchStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BranchId`<sup>Required</sup> <a name="BranchId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.branchId"></a>

```go
func BranchId() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPostgresBranchProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference">DataDatabricksPostgresBranchProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.spec"></a>

```go
func Spec() DataDatabricksPostgresBranchSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference">DataDatabricksPostgresBranchSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.status"></a>

```go
func Status() DataDatabricksPostgresBranchStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference">DataDatabricksPostgresBranchStatusOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresBranchConfig <a name="DataDatabricksPostgresBranchConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresbranch"

&datadatabrickspostgresbranch.DataDatabricksPostgresBranchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#name DataDatabricksPostgresBranch#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#provider_config DataDatabricksPostgresBranch#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#name DataDatabricksPostgresBranch#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPostgresBranchProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#provider_config DataDatabricksPostgresBranch#provider_config}.

---

### DataDatabricksPostgresBranchProviderConfig <a name="DataDatabricksPostgresBranchProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresbranch"

&datadatabrickspostgresbranch.DataDatabricksPostgresBranchProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#workspace_id DataDatabricksPostgresBranch#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#workspace_id DataDatabricksPostgresBranch#workspace_id}.

---

### DataDatabricksPostgresBranchSpec <a name="DataDatabricksPostgresBranchSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresbranch"

&datadatabrickspostgresbranch.DataDatabricksPostgresBranchSpec {
	ExpireTime: *string,
	IsProtected: interface{},
	NoExpiry: interface{},
	SourceBranch: *string,
	SourceBranchLsn: *string,
	SourceBranchTime: *string,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.expireTime">ExpireTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#expire_time DataDatabricksPostgresBranch#expire_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.isProtected">IsProtected</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#is_protected DataDatabricksPostgresBranch#is_protected}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.noExpiry">NoExpiry</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#no_expiry DataDatabricksPostgresBranch#no_expiry}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranch">SourceBranch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch DataDatabricksPostgresBranch#source_branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchLsn">SourceBranchLsn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch_lsn DataDatabricksPostgresBranch#source_branch_lsn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchTime">SourceBranchTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch_time DataDatabricksPostgresBranch#source_branch_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.ttl">Ttl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#ttl DataDatabricksPostgresBranch#ttl}. |

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.expireTime"></a>

```go
ExpireTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#expire_time DataDatabricksPostgresBranch#expire_time}.

---

##### `IsProtected`<sup>Optional</sup> <a name="IsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.isProtected"></a>

```go
IsProtected interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#is_protected DataDatabricksPostgresBranch#is_protected}.

---

##### `NoExpiry`<sup>Optional</sup> <a name="NoExpiry" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.noExpiry"></a>

```go
NoExpiry interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#no_expiry DataDatabricksPostgresBranch#no_expiry}.

---

##### `SourceBranch`<sup>Optional</sup> <a name="SourceBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranch"></a>

```go
SourceBranch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch DataDatabricksPostgresBranch#source_branch}.

---

##### `SourceBranchLsn`<sup>Optional</sup> <a name="SourceBranchLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchLsn"></a>

```go
SourceBranchLsn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch_lsn DataDatabricksPostgresBranch#source_branch_lsn}.

---

##### `SourceBranchTime`<sup>Optional</sup> <a name="SourceBranchTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchTime"></a>

```go
SourceBranchTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch_time DataDatabricksPostgresBranch#source_branch_time}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#ttl DataDatabricksPostgresBranch#ttl}.

---

### DataDatabricksPostgresBranchStatus <a name="DataDatabricksPostgresBranchStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresbranch"

&datadatabrickspostgresbranch.DataDatabricksPostgresBranchStatus {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresBranchProviderConfigOutputReference <a name="DataDatabricksPostgresBranchProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresbranch"

datadatabrickspostgresbranch.NewDataDatabricksPostgresBranchProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresBranchProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresBranchSpecOutputReference <a name="DataDatabricksPostgresBranchSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresbranch"

datadatabrickspostgresbranch.NewDataDatabricksPostgresBranchSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresBranchSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetIsProtected">ResetIsProtected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetNoExpiry">ResetNoExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranch">ResetSourceBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchLsn">ResetSourceBranchLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchTime">ResetSourceBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetExpireTime"></a>

```go
func ResetExpireTime()
```

##### `ResetIsProtected` <a name="ResetIsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetIsProtected"></a>

```go
func ResetIsProtected()
```

##### `ResetNoExpiry` <a name="ResetNoExpiry" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetNoExpiry"></a>

```go
func ResetNoExpiry()
```

##### `ResetSourceBranch` <a name="ResetSourceBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranch"></a>

```go
func ResetSourceBranch()
```

##### `ResetSourceBranchLsn` <a name="ResetSourceBranchLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchLsn"></a>

```go
func ResetSourceBranchLsn()
```

##### `ResetSourceBranchTime` <a name="ResetSourceBranchTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchTime"></a>

```go
func ResetSourceBranchTime()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTimeInput">ExpireTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtectedInput">IsProtectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiryInput">NoExpiryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchInput">SourceBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsnInput">SourceBranchLsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTimeInput">SourceBranchTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtected">IsProtected</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiry">NoExpiry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranch">SourceBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsn">SourceBranchLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTime">SourceBranchTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec">DataDatabricksPostgresBranchSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTimeInput"></a>

```go
func ExpireTimeInput() *string
```

- *Type:* *string

---

##### `IsProtectedInput`<sup>Optional</sup> <a name="IsProtectedInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtectedInput"></a>

```go
func IsProtectedInput() interface{}
```

- *Type:* interface{}

---

##### `NoExpiryInput`<sup>Optional</sup> <a name="NoExpiryInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiryInput"></a>

```go
func NoExpiryInput() interface{}
```

- *Type:* interface{}

---

##### `SourceBranchInput`<sup>Optional</sup> <a name="SourceBranchInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchInput"></a>

```go
func SourceBranchInput() *string
```

- *Type:* *string

---

##### `SourceBranchLsnInput`<sup>Optional</sup> <a name="SourceBranchLsnInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsnInput"></a>

```go
func SourceBranchLsnInput() *string
```

- *Type:* *string

---

##### `SourceBranchTimeInput`<sup>Optional</sup> <a name="SourceBranchTimeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTimeInput"></a>

```go
func SourceBranchTimeInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `IsProtected`<sup>Required</sup> <a name="IsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtected"></a>

```go
func IsProtected() interface{}
```

- *Type:* interface{}

---

##### `NoExpiry`<sup>Required</sup> <a name="NoExpiry" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiry"></a>

```go
func NoExpiry() interface{}
```

- *Type:* interface{}

---

##### `SourceBranch`<sup>Required</sup> <a name="SourceBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranch"></a>

```go
func SourceBranch() *string
```

- *Type:* *string

---

##### `SourceBranchLsn`<sup>Required</sup> <a name="SourceBranchLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsn"></a>

```go
func SourceBranchLsn() *string
```

- *Type:* *string

---

##### `SourceBranchTime`<sup>Required</sup> <a name="SourceBranchTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTime"></a>

```go
func SourceBranchTime() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresBranchSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec">DataDatabricksPostgresBranchSpec</a>

---


### DataDatabricksPostgresBranchStatusOutputReference <a name="DataDatabricksPostgresBranchStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresbranch"

datadatabrickspostgresbranch.NewDataDatabricksPostgresBranchStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresBranchStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.branchId">BranchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.currentState">CurrentState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.default">Default</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.isProtected">IsProtected</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.logicalSizeBytes">LogicalSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.pendingState">PendingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.purgeTime">PurgeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranch">SourceBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchLsn">SourceBranchLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchTime">SourceBranchTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.stateChangeTime">StateChangeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus">DataDatabricksPostgresBranchStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchId`<sup>Required</sup> <a name="BranchId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.branchId"></a>

```go
func BranchId() *string
```

- *Type:* *string

---

##### `CurrentState`<sup>Required</sup> <a name="CurrentState" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.currentState"></a>

```go
func CurrentState() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `IsProtected`<sup>Required</sup> <a name="IsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.isProtected"></a>

```go
func IsProtected() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LogicalSizeBytes`<sup>Required</sup> <a name="LogicalSizeBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.logicalSizeBytes"></a>

```go
func LogicalSizeBytes() *f64
```

- *Type:* *f64

---

##### `PendingState`<sup>Required</sup> <a name="PendingState" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.pendingState"></a>

```go
func PendingState() *string
```

- *Type:* *string

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.purgeTime"></a>

```go
func PurgeTime() *string
```

- *Type:* *string

---

##### `SourceBranch`<sup>Required</sup> <a name="SourceBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranch"></a>

```go
func SourceBranch() *string
```

- *Type:* *string

---

##### `SourceBranchLsn`<sup>Required</sup> <a name="SourceBranchLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchLsn"></a>

```go
func SourceBranchLsn() *string
```

- *Type:* *string

---

##### `SourceBranchTime`<sup>Required</sup> <a name="SourceBranchTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchTime"></a>

```go
func SourceBranchTime() *string
```

- *Type:* *string

---

##### `StateChangeTime`<sup>Required</sup> <a name="StateChangeTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.stateChangeTime"></a>

```go
func StateChangeTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresBranchStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus">DataDatabricksPostgresBranchStatus</a>

---



