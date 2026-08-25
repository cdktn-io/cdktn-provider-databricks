# `dataDatabricksAwsCrossaccountPolicy` Submodule <a name="`dataDatabricksAwsCrossaccountPolicy` Submodule" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsCrossaccountPolicy <a name="DataDatabricksAwsCrossaccountPolicy" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy databricks_aws_crossaccount_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAwsCrossaccountPolicy(Construct Scope, string Id, DataDatabricksAwsCrossaccountPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig">DataDatabricksAwsCrossaccountPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig">DataDatabricksAwsCrossaccountPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetAwsPartition">ResetAwsPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetPassRoles">ResetPassRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetPolicyType">ResetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetSecurityGroupId">ResetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetAwsPartition` <a name="ResetAwsPartition" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetAwsPartition"></a>

```csharp
private void ResetAwsPartition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassRoles` <a name="ResetPassRoles" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetPassRoles"></a>

```csharp
private void ResetPassRoles()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetPolicyType"></a>

```csharp
private void ResetPolicyType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityGroupId` <a name="ResetSecurityGroupId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetSecurityGroupId"></a>

```csharp
private void ResetSecurityGroupId()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAwsCrossaccountPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAwsCrossaccountPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAwsCrossaccountPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAwsCrossaccountPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAwsCrossaccountPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAwsCrossaccountPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAwsCrossaccountPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAwsCrossaccountPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsCrossaccountPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.json">Json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsPartitionInput">AwsPartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.passRolesInput">PassRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsPartition">AwsPartition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.passRoles">PassRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.json"></a>

```csharp
public string Json { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `AwsPartitionInput`<sup>Optional</sup> <a name="AwsPartitionInput" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsPartitionInput"></a>

```csharp
public string AwsPartitionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PassRolesInput`<sup>Optional</sup> <a name="PassRolesInput" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.passRolesInput"></a>

```csharp
public string[] PassRolesInput { get; }
```

- *Type:* string[]

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `AwsPartition`<sup>Required</sup> <a name="AwsPartition" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsPartition"></a>

```csharp
public string AwsPartition { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PassRoles`<sup>Required</sup> <a name="PassRoles" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.passRoles"></a>

```csharp
public string[] PassRoles { get; }
```

- *Type:* string[]

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsCrossaccountPolicyConfig <a name="DataDatabricksAwsCrossaccountPolicyConfig" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAwsCrossaccountPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AwsAccountId = null,
    string AwsPartition = null,
    string Id = null,
    string[] PassRoles = null,
    string PolicyType = null,
    string Region = null,
    string SecurityGroupId = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#aws_account_id DataDatabricksAwsCrossaccountPolicy#aws_account_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.awsPartition">AwsPartition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#aws_partition DataDatabricksAwsCrossaccountPolicy#aws_partition}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#id DataDatabricksAwsCrossaccountPolicy#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.passRoles">PassRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#pass_roles DataDatabricksAwsCrossaccountPolicy#pass_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.policyType">PolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#policy_type DataDatabricksAwsCrossaccountPolicy#policy_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#region DataDatabricksAwsCrossaccountPolicy#region}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#security_group_id DataDatabricksAwsCrossaccountPolicy#security_group_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#vpc_id DataDatabricksAwsCrossaccountPolicy#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#aws_account_id DataDatabricksAwsCrossaccountPolicy#aws_account_id}.

---

##### `AwsPartition`<sup>Optional</sup> <a name="AwsPartition" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.awsPartition"></a>

```csharp
public string AwsPartition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#aws_partition DataDatabricksAwsCrossaccountPolicy#aws_partition}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#id DataDatabricksAwsCrossaccountPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PassRoles`<sup>Optional</sup> <a name="PassRoles" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.passRoles"></a>

```csharp
public string[] PassRoles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#pass_roles DataDatabricksAwsCrossaccountPolicy#pass_roles}.

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#policy_type DataDatabricksAwsCrossaccountPolicy#policy_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#region DataDatabricksAwsCrossaccountPolicy#region}.

---

##### `SecurityGroupId`<sup>Optional</sup> <a name="SecurityGroupId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#security_group_id DataDatabricksAwsCrossaccountPolicy#security_group_id}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/aws_crossaccount_policy#vpc_id DataDatabricksAwsCrossaccountPolicy#vpc_id}.

---



